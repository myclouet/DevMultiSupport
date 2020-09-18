import { Injectable } from '@angular/core';
import { Hero } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { Storage } from '@ionic/storage';
import { CharacterService } from './character.service';
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SauvegardeService {
  //private initialHero: Hero
  private stateGame: {hero: Hero, scene: Scene}
  //private story: {action:string , description:string}[]=[]
  private story=[];
    
    

  constructor(public storage: Storage,
              private characterService: CharacterService,
              private router: Router,
              public alertController: AlertController) { }

  saveGame() {
    this.storage.set('stateGame',this.stateGame);
    this.storage.set('story',this.story);

    // test des clés sauvegardées
/*     this.stateGame=null;
    console.log(this.stateGame);
    this.storage.get('stateGame').then((state)=>{
      this.stateGame=state;
      console.log(this.stateGame);
    }); */
    
  }

  restoreGame() {
    this.storage.get('stateGame').then((state)=>{
      this.stateGame=state; // on récupère l'état du jeu
      this.characterService.heros=this.stateGame.hero;  // on affecte le héro du service character avec le héro récupéré
      //console.log(this.characterService.heros);
      const idSceneToRestore=this.stateGame.scene._id;  // on récupère l'id de la scène à restaurer
      this.router.navigate(['/scene/'+idSceneToRestore]); // on restaure la scène
      this.restoreAlert();    
    });
    this.storage.get('story').then((story)=>{
      this.story=story;
    });
    // test des clés sauvegardées
/*     this.storage.get('stateGame').then((state)=>{
      this.stateGame=state;
      console.log(this.stateGame);
    }); */
  }
  
  async restoreAlert() {
    const sceneTitleToRestore=this.stateGame.scene.title;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Restauration',
      message: 'Reprise de la partie à la scène \n'+sceneTitleToRestore,
      buttons: ['OK']
    });

    await alert.present();
  }

   saveChooseScene (scene,hero) {
    const description= "tu as choisi de ";
   // const element={action:chooseScene,description:description];
  //  this.story.push(element);
    } 
    

  setStateGame(hero:Hero,scene:Scene) {
    this.stateGame={hero,scene};
    //console.log(this.stateGame);
  }

  getStateGame() {
    return this.stateGame;
  }

}
