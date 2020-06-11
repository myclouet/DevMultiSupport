import { Injectable } from '@angular/core';
import { Hero } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SauvegardeService {
  //private initialHero: Hero
  private stateGame: {hero: Hero, scene: Scene}
  private story: {action:string , description:string}[]=[]

  constructor(public storage: Storage) { }

  saveGame() {
    this.storage.set('stateGame',this.stateGame);
    this.storage.set('story',this.story);
  }

  restoreGame() {
    this.storage.get('stateGame').then((state)=>{
      this.stateGame=state;
    });
    this.storage.get('story').then((story)=>{
      this.story=story;
    });
  }

  setStateGame(hero:Hero,scene:Scene) {
    this.stateGame.hero=hero;
    this.stateGame.scene=scene;
  }

  getStateGame() {
    return this.stateGame;
  }

}
