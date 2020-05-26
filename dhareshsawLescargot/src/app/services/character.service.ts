import { Injectable } from '@angular/core';
import { Character, Hero } from '../personnage';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
character: Character;
hero: Hero;

  constructor() { }

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

  // Méthodes spécifiques au héro
  public die() {
    // this.dead = true;
    console.log('Vous êtes mort');
  }

  public chooseScene(myScene) {
  }

  public winGame() {
    console.log('Vous avez gagné !');
  }

  public looseGame() {
    console.log('Vous avez perdu !');
  }

  public rollDice(): number {
    // tslint:disable-next-line: prefer-const
    let res = Math.floor(Math.random() * 6) + 1;
    return res;
  }

  public fight() {

  }

  public escape() {

  }

  public addObject(item: number) {
  }

  public useObject(myObj: number) {

  }

  public removeObj(myObj: number) {

  }
}
