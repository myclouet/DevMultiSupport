import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { SceneService } from '../services/scene.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { ObjectInventoryModalPage } from '../object-inventory-modal/object-inventory-modal.page';
import { SauvegardeService } from '../services/sauvegarde.service';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;


@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  //----------------------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------------------

  heros: Hero;
  adversaire: Character;
  scene: Scene;
  dataReturned: any;

  //----------------------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------------------

  constructor (
    private characterService : CharacterService,
    private sceneService : SceneService,
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    public alertController: AlertController,
    private sauvegarde: SauvegardeService,
    private platform: Platform
    ) { }
    
  ngOnInit() {

  this.scene = this.sceneService.getSceneById(this.route.snapshot.paramMap.get('id'))
   
  this.heros = this.characterService.getPersonnageById('0');
  //this.characterService.heros = this.heros;
  this.adversaire = this.getAdversaire(); 
  //this.fightRandom(); ATTENTION PLANTAGE ALEATOIRE LORSQUE ACTIF
  //this.characterService.character = this.adversaire;
  }

  //----------------------------------------------------------------------------------------------------
  //METHODS SCENES
  //----------------------------------------------------------------------------------------------------

  nextScene(indice: number) {
    this.router.navigate(['scene/',this.scene.nextScenes[indice]]);
  }

  //----------------------------------------------------------------------------------------------------
  //METHODS COMBATS
  //----------------------------------------------------------------------------------------------------

  /**
   * Initialisation adversaire
  **/
  getAdversaire(){
    return this.adversaire = this.characterService.getPersonnageById(this.scene.idCharacter);// Attention doublon idCharactere et encounter
  }

  /**
   * Combat
  **/
  fightRandom() {
   this.characterService.fight();
  }

  /**
   * Fuite
  **/
  escape() {
   this.characterService.escape();
  }

  // --------------------------------------------------------------------------------------------------
  // Ouverture modale
  // --------------------------------------------------------------------------------------------------
  async openModal() {
    const modal = await this.modalController.create({
      component: ObjectInventoryModalPage,
      componentProps: {
        hero: this.heros
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }

  // -----------------------------------------------------------------------------------------------
  // Sauvegarder partie
  // -----------------------------------------------------------------------------------------------

  sauvegarder() {
    this.sauvegarde.saveGame();
    this.saveAlert();
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sauvegarde',
      message: 'Partie sauvegardée',
      buttons: ['OK']
    });

    await alert.present();
  }

  // -----------------------------------------------------------------------------------------------
  // Quitter l'application
  // -----------------------------------------------------------------------------------------------

  async quitter() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Quitter',
        message: 'Souhaitez-vous quitter l\'application ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Opération annulée');
            }
          }, {
            text: 'Quitter',
            handler: () => {
              this.sauvegarde.saveGame();
              console.log('Je quitte!');
              App.exitApp();
            }
          }
        ]
      });
      await alert.present();
    }


}
