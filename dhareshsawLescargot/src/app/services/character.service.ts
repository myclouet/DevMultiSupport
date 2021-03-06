import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Character, Hero } from '../classes/personnage';
import { HERO, PERSONNAGES } from '../datas/listePersonnages';
import { WinLooseModalPage } from '../win-loose-modal/win-loose-modal.page';
import { AudioService } from './audio.service';
import { SauvegardeService } from './sauvegarde.service';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;
  heros: Hero;
  battleWon: boolean;
  neutralFight: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private sauvegardeService: SauvegardeService,
    public modalController: ModalController,
    private audioService: AudioService
  ) {
    this.heros = this.getHero(); // initialisation du héro
  }

  /** Liste de personnages
   * @returns a list with all characters.
   */
  getPersonnages() {
    return PERSONNAGES;
  }

  /** Personnage par id */
  getPersonnageById(id) {
    return PERSONNAGES.find(({ _id }) => _id === id);
  }

  /** Heros
   * @returns the hero
   */
  getHero() {
    return HERO;
  }

/** Heros */
  getBattleWon() {
    return this.battleWon;
  }
/** initialisation of the Hero */
  initHero() {
    this.heros =
    {
      _id: '0',
      name: 'Dhareshsaw l\'escargot',
      avatar: './assets/avatars/dhareshsaw.png',
      strength: 4,
      luck: 4,
      endurance: 3,
      items: null,
      hasKey: false,
    };
  }

  /*
  // Liste des getters et setters communs
  public getId() {
    return this.character._id;
  }

  public getName() {
    return this.character.name;
  }

  public getAvatar() {
    return this.character.avatar;
  }

  public getStrength() {
    return this.character.strength;
  }

  public getLuck() {
    return this.character.luck;
  }

  public getEndurance() {
    return this.character.endurance;
  }

  public getItems() {
    return this.character.items;
  }

  public setStrength(strength: number) {
    this.character.strength = strength;
  }

  public setLuck(luck: number) {
    this.character.luck = luck;
  }

  public setEndurance(endurance: number) {
    this.character.endurance = endurance;
  }
  */

  /**  Méthodes spécifiques au héro */
  public die() {
    console.log('Vous êtes mort');
  }

  public chooseScene(myScene) {
  }
/**
 * Battle won
 * @param scene (current scene)
 */
  public winGame(scene) {
    console.log('Vous avez gagné !');
    this.battleWon = true;
    this.sauvegardeService.saveAction("tu as gagné le combat !");
    this.openModalWinLoose(WinLooseModalPage);
    //TMP jusqu'à modale réalisée - uniquement pour tests
    this.router.navigate(['scene/', scene.nextScenes[1]]);
  }

/**
 * Battle loose
 * @param scene (current scene)
 */
  public looseGame(scene) {
    console.log('Vous avez perdu !');
    this.battleWon = false;
    this.sauvegardeService.saveAction("tu as perdu le combat !")
    this.openModalWinLoose(WinLooseModalPage);
    //TMP jusqu'à modale réalisée - uniquement pour tests
    this.router.navigate(['scene/', scene.nextScenes[0]]);
  }

  /** jet de dé */
  public rollDice(): number {
    // tslint:disable-next-line: prefer-const
    let res = 0;
    let path: string;
    res = Math.floor(Math.random() * 6) + 1;
    console.log(res);
    return res;
  }

  /** chemmins vers png correspondant au résultat du dé */
  public pathDiceIcon(res) {
    let path: string;
    switch (res) {
      case 1:
        path = './assets/dice/dice-1-salade.png';
        break;
      case 2:
        path = './assets/dice/dice-2.png';
        break;
      case 3:
        path = './assets/dice/dice-3.png';
        break;
      case 4:
        path = './assets/dice/dice-4.png';
        break;
      case 5:
        path = './assets/dice/dice-5.png';
        break;
      case 6:
        path = './assets/dice/dice-6.png';
        break;
    }
    return path;
  }


  // prise de decision du combat
  /*public fight() {
    let result = 0;
    result = Math.floor(Math.random() * 2);
    let res: boolean = false;

    switch (result) {
      case 0:
        console.log('Automatic Fight');
        if (this.automaticFight() == true) {
        res = true;
      }
        break;

      case 1:
        console.log('Conditional Fight');
        if (this.conditionnalFight() === true) { 
        res = true;
        }
        break;
    }
    return res;
  }*/


  /** conditionnalFight */
  async conditionnalFight(scene) {
    let value = this.rollDice();
    if ((this.heros.strength + (this.heros.luck - value) > this.character.endurance) || value === 1) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: `${value}`,
        message: `<img src="${this.pathDiceIcon(value)}" alt="dice" style="border-radius: 2px">`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.winGame(scene);
              this.audioService.startAudioService();
            }
          },
        ]
      });
      await alert.present();
      return true;
    } else if (this.character.strength + (this.character.luck - value) >= this.heros.endurance) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: `${value}`,
        message: `<img src="${this.pathDiceIcon(value)}" alt="dice" style="border-radius: 2px">`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.looseGame(scene);
              this.audioService.startAudioServiceLoose();
            }
          },
        ]
      });
      await alert.present();
      return false;
    }
    else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: `${value}`,
        message: `<img src="${this.pathDiceIcon(value)}" alt="dice" style="border-radius: 2px"> </br> Vous vous défendez tous les 2 correctement, continuez !`,
        buttons: [
          {
            text: 'Jet de dé',
            handler: () => {
              this.conditionnalFight(scene);
            }
          },
        ]
      });
      await alert.present();
    }
  }

  /** alert box pour comabt automatique */
  async automaticFightAlert(value, scene) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Blessure",
      message: `Tu perds 1 point ${value} !`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.winGame(scene);
            this.audioService.startAudioService();
          }
        },
      ]
    });
    await alert.present();
  }

/** automaticFight
 * @param scene: current scene
 */
  automaticFight(scene) {
    let result = 0;
    result = Math.floor(Math.random() * 4);
    let res: boolean = false;

    switch (result) {
      case 0:
        this.heros.strength = this.heros.strength - 1;
        console.log("strength : " + this.heros.strength);
        res = true;
        this.automaticFightAlert("de force", scene);
        break;

      case 1:
        this.heros.endurance = this.heros.endurance - 1;
        console.log("endurance : " + this.heros.endurance);
        res = true;
        this.automaticFightAlert("d'endurance", scene);
        break;

      case 2:
        this.heros.luck = this.heros.luck - 1;
        console.log("luck : " + this.heros.luck);
        res = true;
        this.automaticFightAlert("de chance", scene);
        break;

      case 3:
        this.looseGame(scene);
        break;
    }
    return res;
  }

  // ----------------------------------------------------------------------------------------------------------------
  // FUITE
  // ----------------------------------------------------------------------------------------------------------------

  // fuite
  
  async escape(adversaire, scene) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FUITE',
      message: `Obtiens moins que ta chance : ${this.heros.luck} <br> pour réussir à fuir !!!`,
      buttons: [
        {
          text: 'JET DE DÉ',
          handler: () => {
            this.escapeDice(adversaire, scene);
          }
        }
      ]
    });
    await alert.present();
  }


    async escapeDice(adversaire, scene){
    const value = this.heros.strength + this.heros.luck - adversaire.endurance;
    const resultatDe = this.rollDice();
    let message: any;
    if (value <= 1) {
      message = `<img src="${this.pathDiceIcon(resultatDe)}" alt="dice"> </br>Tu n\'as pas bavé assez pour fuir<br> Le combat est inévitable <br> Tu dois obtenir 1 pour gagner le combat`;
    } else if (value > 6) {
      message = `<img src="${this.pathDiceIcon(resultatDe)}" alt="dice"> </br>Tu n\'as pas bavé assez pour fuir<br>  Le combat est inévitable <br>Tu dois obtenir 6 ou moins pour gagner le combat`;
    } else {
      // tslint:disable-next-line: max-line-length
      message = `<img src="${this.pathDiceIcon(resultatDe)}" alt="dice"> </br>Tu n'as pas bavé assez pour fuir<br>  Le combat est inévitable <br> Tu dois obtenir moins que ${value} pour gagner le combat`;
    }
    
    if (resultatDe < this.heros.luck) {
    console.log('Je me suis échappé');
    console.log('Dé : ' + resultatDe);
    console.log('Luck : ' + this.heros.luck);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FUITE',
      message: `<img src="${this.pathDiceIcon(resultatDe)}" alt="dice"> </br>Bravo, tu as échappé au combat, tu retournes à la scène précédente !`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['scene/', scene.previousScene]);
            this.audioService.startAudioService();
          }
        }
      ]
    });
    await alert.present();
    } else {
      console.log('tu n\'as pas assez bavé, viens te battre mauviette');
      console.log('Dé : ' + resultatDe);
      console.log('Luck : ' + this.heros.luck); 
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'FUITE',
      message: `${message}`,
      buttons: [
        {
          text: 'Jet de dé',
          handler: async () => {
            const fin = await this.conditionnalFight(scene);
            console.log('TEST !' + fin);
          }
        }
      ]
    });
             await alert.present();
    }
  }
  

  public addObject(item: number) {
  }

  public useObject(myObj: number) {

  }

  public removeObj(myObj: number) {

  }

  /**
   * Method which creates and opens modal to display when the player win or loose
   * @param modalPage WinLooseModalPage
   */
  async openModalWinLoose(modalPage: typeof WinLooseModalPage) {
    const modal = await this.modalController.create({
      component: modalPage,
      componentProps: {
        paramBattleWin:  this.battleWon
      }
    });
    modal.onDidDismiss ();
    return await modal.present();
  }
}
