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
<<<<<<< HEAD
import { HistoryModalPage } from '../history-modal/history-modal.page';
=======
import { AudioService } from '../services/audio.service';
>>>>>>> f03ebbfbdf7a32c1f903fc2c47aaaf54d8a1a1e6


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
<<<<<<< HEAD
  //story: Story;
=======
  audioBtn: Boolean = true;
>>>>>>> f03ebbfbdf7a32c1f903fc2c47aaaf54d8a1a1e6

  //----------------------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------------------

  constructor(
    private characterService: CharacterService,
    private sceneService: SceneService,
    private route: ActivatedRoute,
    private sauvegardeService: SauvegardeService,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    private audioService: AudioService) { }

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

  prevScene() {
    this.router.navigate(['scene/',this.scene.previousScene]);
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
    const value = this.heros.strength + this.heros.luck - this.adversaire.endurance;
    let message: any;
    if(value <= 1) {
      message = "À vous de faire le meilleur choix !!!<br>L'issue d'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir 1 pour gagner le combat";
    }
    else if (value >6) {
      message = "À vous de faire le meilleur choix !!!<br>L'issue d'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir 6 ou moins pour gagner le combat";
    }
    else {
      message = `À vous de faire le meilleur choix !!!<br>L'issue d'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir moins que ${value} pour gagner le combat`;
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Choix du combat',
      message: `${message}`,
      buttons: [
        {
          text: 'Aléatoire',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.characterService.automaticFight(this.scene);
            this.scene.battleWon = this.characterService.battleWon;
          }
        }, {
          text: 'Jet de dé',
          handler: () => {
            this.characterService.conditionnalFight(this.scene);
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
      this.title = "EN CHEMIN"
    } else if(this.scene.isBattle === true) {
this.title = "COMBAT"
    } else {
      this.title = "RENCONTRE";
    }
  }

  // ---------------------------------------------------------------------------------------------
  // Fuite
  //------------------------------------------------------------------------------------------------
  async escape() {
    const value = this.heros.strength + this.heros.luck - this.adversaire.endurance;
    let message: any;
    if(value <= 1) {
      message = "Tu n'as pas bavé assez pour fuir !!! Le combat est inévitable <br> Tu dois obtenir 1 pour gagner le combat";
    }
    else if (value >6) {
      message = "Tu n'as pas bavé assez pour fuir !!! Le combat est inévitable <br>Tu dois obtenir 6 ou moins pour gagner le combat";
    }
    else {
      message = `Tu n'as pas bavé assez pour fuir !!! Le combat est inévitable <br> Tu dois obtenir moins que ${value} pour gagner le combat`;
    };

    if(this.characterService.escape()) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FUITE',
      message: "Bravo, tu as échappé au combat, tu retournes à la scène précédente !",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.prevScene();
          }
        }
      ]
    });
    await alert.present();
    } 
    else { const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FUITE',
      message: `${message}`,
      buttons: [
        {
          text: 'Jet de dé',
          handler: () => {
            this.adversaire = this.getAdversaire(); 
            this.characterService.character = this.adversaire;
            this.characterService.conditionnalFight(this.scene);
            this.scene.battleWon = this.characterService.battleWon;
          }
        }
      ]
    });
    await alert.present();
    }
  }

  /* Sauvegarder */
/*   sauvegarder() {
    this.sauvegardeService.setStateGame(this.heros,this.scene);
    this.sauvegardeService.saveGame();
  } */

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


  async openModalHistory() {
    const modal = await this.modalController.create({
      component: HistoryModalPage,
      componentProps: {
       "paramID": 123,
       "paramTitle": "TEST TITLE",
       "paramStory": this.scene,
       scene: this.scene
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

   save() {      
    this.sauvegardeService.setStateGame(this.heros,this.scene);
    this.sauvegardeService.saveGame();
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
              //this.sauvegarde.saveGame(); // code Boris
              console.log('Je quitte!');
              //App.exitApp();
            }
          }
        ]
      });
      await alert.present();
    }

     // -----------------------------------------------------------------------------------------------
     // AUDIO
     // -----------------------------------------------------------------------------------------------

     startAudio() {
      this.audioService.startAudioService();
      this.audioBtn = true;
    }

    restartAudio() {
      this.audioService.restartAudioService();
      this.audioBtn = true;
    }

    stopAudio() {
      this.audioService.stopAudioService();
      this.audioBtn = false;
    }
}
