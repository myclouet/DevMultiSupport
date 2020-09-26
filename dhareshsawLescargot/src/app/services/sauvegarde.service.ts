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
  private restore:boolean=false;

  constructor(public storage: Storage,
              public alertController: AlertController) { }

  saveGame() {
    this.storage.set('stateGame',this.stateGame);
    this.storage.set('story',this.story);
  }

  saveScene(scene) {
    this.story.push(
      {
          scene: scene,
          actions: [],
      }
    );
    //console.log(this.story);
  }

  saveAction(action){
    const lastStoryElement=this.story[this.story.length-1];
    lastStoryElement.actions.push(action);
  }
    
  setStateGame(hero:Hero,scene:Scene) {
    this.stateGame={hero,scene};
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

  setRestore(state:boolean) {
    this.restore=state;
  }
  
  getRestore() {
    return this.restore;
  }

  resetSauvegarde() {
    this.story=[];
    this.storage.set('stateGame',null);
    this.storage.set('story',null);
  }

}
