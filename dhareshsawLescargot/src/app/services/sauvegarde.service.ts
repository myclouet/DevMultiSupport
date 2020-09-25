import { Injectable } from '@angular/core';
import { Hero } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SauvegardeService {
  private stateGame: {hero: Hero, scene: Scene}
  private story:{scene:Scene, actions:string[]}[]=[];

  constructor(public storage: Storage,
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

  saveScene(scene) {
    this.story.push(
      {
          scene: scene,
          actions: [],
      }
    );
    console.log(this.story);
  }

  saveAction(action){
    const lastStoryElement=this.story[this.story.length-1];
    lastStoryElement.actions.push(action);
  }
    

  setStateGame(hero:Hero,scene:Scene) {
    this.stateGame={hero,scene};
    //console.log(this.stateGame);
  }

  getStateGame() {
    return this.stateGame;
  }

  setStory(story) {
    this.story=story;
  }

  getStory() {
    return this.story;
  }

}
