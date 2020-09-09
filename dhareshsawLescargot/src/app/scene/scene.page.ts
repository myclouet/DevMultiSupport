import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { SceneService } from '../services/scene.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ObjectInventoryModalPage } from '../object-inventory-modal/object-inventory-modal.page';
import { SauvegardeService } from '../services/sauvegarde.service';


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
  title: String;
  dataReturned: any;

  //----------------------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------------------

  constructor(
    private characterService: CharacterService,
    private sceneService: SceneService,
    private route: ActivatedRoute,
    private sauvegarde: SauvegardeService,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {

  this.scene = this.sceneService.getSceneById(this.route.snapshot.paramMap.get('id'));

  this.sceneTitle();

  this.heros = this.characterService.heros; // mise à jour du héro avec le héro du service
  // console.log(this.heros);

  this.adversaire = this.getAdversaire(); 

  this.characterService.character = this.adversaire;
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
    return this.adversaire = this.characterService.getPersonnageById(this.scene.encounter);// Attention doublon idCharactere et encounter
  }

  /* Choix combat */
  async fightSelection() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Choix du combat',
      message: "À vous de faire le meilleur choix !!!<br>L'issue d'un combat automatique est aléatoire, mais si vous désirez jeter le dé, vous devez obtenir un X pour gagner.",
      buttons: [
        {
          text: 'Aléatoire',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.characterService.automaticFight();
            this.scene.battleWon = this.characterService.battleWon;
          }
        }, {
          text: 'Jet de dé',
          handler: () => {
            this.characterService.conditionnalFight();
            this.scene.battleWon = this.characterService.battleWon;
          }
        }
      ]
    });
    await alert.present();
  } 


  /**
   * Affichage du Header
  **/
  sceneTitle(){
    if(this.scene.encounter === null){
      this.title = "EN ROUTE"
    } else if(this.scene.isBattle === true) {
this.title = "COMBAT"
    } else {
      this.title = "RENCONTRE";
    }
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
              //App.exitApp();
            }
          }
        ]
      });
      await alert.present();
    }


}
