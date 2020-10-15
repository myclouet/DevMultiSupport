import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
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
import { HistoryModalPage } from '../history-modal/history-modal.page';
import { AudioService } from '../services/audio.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { isLoweredSymbol } from '@angular/compiler';
import { ObjectInventory } from '../classes/object';
import { ModalLanguagesPage } from '../modal-languages/modal-languages.page';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  // ----------------------------------------------------------------------------------------------------
  // ATTRIBUTS
  // ----------------------------------------------------------------------------------------------------

  heros: Hero;
  adversaire: Character;
  scene: Scene;
  title: string;
  dataReturned: any;
  audioBtn: Boolean = this.audioService.audio;
  audioVoiceBtn: Boolean = false;
  progressionBar: number;
  progressionBuffer: number;
  marginVar: string;
  marginNum: number;
  saveBtn: Boolean = true;

/** Message to display */
  fightMessage: string;
  escapeMessage: string;
  progressionMessage: string;
  chooseDirectionMessage: string;
  enduranceMessage: string;
  strengthMessage: string;
  luckMessage: string;
  difficultyMessage: string;
  newGameMessage: string;

  /**png if death scenes 15 and 23 */
  scene15 = '../../assets/escargotScene15.png';
  scene23 = '../../assets/mort23.png';

  // ----------------------------------------------------------------------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------------------------------------------------------------------

  constructor(
    private characterService: CharacterService,
    private sceneService: SceneService,
    private route: ActivatedRoute,
    private sauvegardeService: SauvegardeService,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    private audioService: AudioService,
    private translateService: TranslateService,
    private languageService: LanguageService) {
      const language = this.languageService.getLanguage();
      this.translateService.use(language);

      this.translateService.get(
        ['ScenePage.fightButon',
         'ScenePage.escapeButton',
         'ScenePage.progression',
         'ScenePage.chooseDirection',
         'ScenePage.endurance',
         'ScenePage.strength',
         'ScenePage.luck',
         'ScenePage.difficulty',
         'ScenePage.newGameMessage'
        ])
      .subscribe(res => {
        this.fightMessage = res['ScenePage.fightButon'];
        this.escapeMessage = res['ScenePage.escapeButton'];
        this.progressionMessage = res['ScenePage.progression'];
        this.chooseDirectionMessage = res['ScenePage.chooseDirection'];
        this.enduranceMessage = res['ScenePage.endurance'];
        this.strengthMessage = res['ScenePage.strength'];
        this.luckMessage = res['ScenePage.luck'];
        this.difficultyMessage = res['ScenePage.difficulty'];
        this.newGameMessage = res['ScenePage.newGameMessage'];
     });
    }

 // -------------------------------------------------------------------------------
 // VAR
 // -------------------------------------------------------------------------------

    ngOnInit() {

      this.scene = this.sceneService.getSceneById(this.route.snapshot.paramMap.get('id'));
      console.log('ngOnInit scene '+ this.scene._id);

      this.sceneTitle();

      this.heros = this.characterService.heros; // mise à jour du héro avec le héro du service

      this.adversaire = this.getAdversaire();

      this.characterService.character = this.adversaire;

      this.progressionBar = this.scene.progressionIndex / 100;
      this.progressionBuffer = this.scene.progressionIndex / 100;
      this.marginNum = this.scene.progressionIndex - 5;
      this.marginVar = this.marginNum + '%';

      if (this.scene._id === '1') {
      this.alertSoundButtons(); // affichage d'une alerte expliquant comment couper ou activer le son et la voix
      }
  }


  ionViewDidEnter() { // use of ionViewDidEnter to correct bugs when going more than one time in a scene
    console.log('ionViewDidEnter scene ' + this.scene._id);
    this.heros = this.characterService.heros; // réinitialisation du héros pour l'affichage lors d'une nouvelle partie
    if (this.sauvegardeService.getRestore()) {
      this.sauvegardeService.setRestore(false);
    } else {
      this.sauvegardeService.saveScene(this.scene);
      this.getObject(); // getobject() déplacé ici pour corriger bug ajout de l'objet à la restauration

      this.getKey();
      this.saveBtn=true;
    }
    this.startAudioCombat();
    this.audioService.unloadVoice();
    console.log(this.heros);

  }

 /**
  * METHODS SCENES
  */

  async nextScene(indice: number) {
    if (this.scene._id === '36' && this.heros.hasKey === false && indice === 0) {
      const alert = await this.alertController.create({
        cssClass: '',
        header: 'Pas de clé',
        // tslint:disable-next-line: max-line-length
        message: `Vous n'avez pas la clé partez dans l'autre direction`,

        buttons: [
          {
            text: 'OK',
          }
        ]
    });
      await alert.present();
    } else {
    this.router.navigate(['scene/', this.scene.nextScenes[indice]]);
    }
  }

  prevScene() {
    this.router.navigate(['scene/', this.scene.previousScene]);
  }

  getObject() {
    if (this.scene.bonusObject !== null)  {
      this.heros.items = this.heros.items || [];
      this.heros.items.push(this.scene.bonusObject);
      console.log(this.heros.items);
    }
  }

  getKey() {
    if(this.scene.hasKey === true)  {
      this.heros.hasKey = true;
    } 
  }

  async alertSoundButtons() {
      const alert = await this.alertController.create({
        cssClass: '',
        header: 'Contrôle du son',
        // tslint:disable-next-line: max-line-length
        message: `Vous pouvez couper le fond sonore en appuyant sur </br><img class="imgSound" src="../assets/icon/volume-mute-outline.svg"></br></br>Vous pouvez activer la lecture audio des scènes en appuyant sur</br> <img src="../assets/icon/play-circle-outline.svg"> `,

        buttons: [
          {
            text: 'OK',
          }
        ]
    });
      await alert.present();
  }



  // ----------------------------------------------------------------------------------------------------
  // METHODS COMBATS
  // ----------------------------------------------------------------------------------------------------

  /** Initialisation adversaire */
  getAdversaire() {
    return this.adversaire = this.characterService.getPersonnageById(this.scene.encounter); // Attention doublon idCharactere et encounter
  }

  /**  Choix combat */
  async fightSelection() {
    this.saveBtn = false;
    const value = this.heros.strength + this.heros.luck - this.adversaire.endurance;
    let message: any;
    if (value <= 1) {
      // tslint:disable-next-line: max-line-length
      message = 'À vous de faire le meilleur choix !!!<br>L\'issue d\'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir 1 pour gagner le combat';
    } else if (value > 6) {
      // tslint:disable-next-line: max-line-length
      message = 'À vous de faire le meilleur choix !!!<br>L\'issue d\'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir 6 ou moins pour gagner le combat';
    } else {
      // tslint:disable-next-line: max-line-length
      message = `À vous de faire le meilleur choix !!!<br>L'issue d'un combat automatique est aléatoire, mais si vous désirez vous pouvez combattre avec un jet de dé. <br> Vous devez obtenir moins que ${value} pour gagner le combat`;
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Choix du combat',
      message: `${message}`,
      buttons: [
        {
          text: 'Automatique',
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
   */
  sceneTitle() {
    if (this.scene.encounter === null) {
      this.translateService.get('ScenePage.onMyWay').subscribe(message => { this.title = message; });
    } else if (this.scene.isBattle === true) {
      this.translateService.get('ScenePage.fight').subscribe(message => { this.title = message; });
    } else {
      this.translateService.get('ScenePage.meet').subscribe(message => { this.title = message; });
    }
  }

/**
 * Method which allos the player to escape the battle
 */
  async escape() {
    this.sauvegardeService.saveAction('tu as fui le combat ');
    this.saveBtn = false;
    await this.characterService.escape(this.adversaire, this.scene);
    this.audioBtn = this.audioService.audio;
  }

  /** Ouverture modale Inventaire */
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
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }

/**
 * Method which allows to save the current game
 */
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

  /* async quitter() {
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
              // this.sauvegarde.saveGame(); // code Boris
              console.log('Je quitte!');
              // App.exitApp();
            }
          }
        ]
      });
      await alert.present();
    } */

    /**
     * AUDIO METHODS
     */
     startAudio() {
      this.audioService.startAudioService();
      this.audioBtn = this.audioService.audio;
    }

    startAudioCombat() {
      this.audioService.startAudioServiceCombat(this.scene);
      this.audioBtn = this.audioService.audio;
      console.log(this.audioBtn);
      
    }

    restartAudio() {
      this.audioService.restartAudioService(this.scene);
      this.audioBtn = this.audioService.audio;
    }

    stopAudio() {
      this.audioService.stopAudioService(this.scene);
      this.audioBtn = this.audioService.audio;
    }
    /**
     * TEST AUDIO VOICE
     */
    startVoice() {
      this.audioService.startAudioVoiceService(this.scene);
      this.audioVoiceBtn = true;
    }

    stopVoice() {
      this.audioService.stopAudioVoiceService();
      this.audioVoiceBtn = false;
    }

/**
 * BATTLE DIFFICULTY
 */
    difficulte() {
      let difficulte: string;
      const value: number = this.heros.strength + this.heros.luck - this.adversaire.endurance;
      if (value < 3) {
          difficulte = 'hard';
        } else if  (value > 6) {
        difficulte = 'easy';
      } else {
        difficulte = 'normal';
      }
      return difficulte;
    }
/**
 * Method which opens a modal page in order to choose the language of the game
 */
  async choixLangue() {
    const modal = await this.modalController.create({
      component: ModalLanguagesPage,
    });
    return await modal.present();
  }
}
