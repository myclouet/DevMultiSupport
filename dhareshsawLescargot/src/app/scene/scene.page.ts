import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { SceneService } from '../services/scene.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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

  //----------------------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------------------

  constructor (private characterService : CharacterService,
              private sceneService : SceneService,
              private route: ActivatedRoute, 
              private router: Router,
              public modalController: ModalController,
              public alertController: AlertController) { }
    
  ngOnInit() {

  this.scene = this.sceneService.getSceneById(this.route.snapshot.paramMap.get('id'))

  this.sceneTitle();
   
  this.heros=this.characterService.heros; // mise à jour du héro avec le héro du service
  //console.log(this.heros);

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
}
