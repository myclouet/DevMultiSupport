import { Injectable } from '@angular/core';
import { Character, Hero } from '../classes/personnage';
import { PERSONNAGES } from '../datas/listePersonnages';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
character: Character;
heros: Hero;
conditionnalFightBool: boolean = false;

  constructor() { }

  // Liste de personnages
  getPersonnages(){
    return PERSONNAGES;
  }

  // Personnage par id
  getPersonnageById(id) {
    return PERSONNAGES.find(({_id}) => _id === id);
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
    let res = 0;
    res = Math.floor(Math.random() * 6) + 1;
    return res;
  }

  // prise de decision du combat
  public fight() {
    let result = 0;
    result = Math.floor(Math.random() * 2);

    switch (result) {
      case 0:
        console.log('Automatic Fight');
        break;

      case 1:
        console.log('Conditional Fight');
        this.conditionnalFight();
        this.conditionnalFightBool = true;
        break;
    }
  }

  // combat conditionnel
  conditionnalFight() {
    if (this.heros.strength + (this.heros.luck - this.rollDice()) > this.character.endurance){
      console.log("L'adversaire est mort !");
    } else if (this.character.strength + (this.character.luck - this.rollDice()) >= this.heros.endurance){
      console.log('Le héros est mort');
    }
  }

  // fuite
  public escape() {
    const resultatDe = this.rollDice();
    if (resultatDe < this.heros.luck) {
      console.log('Je me suis échappé');
      console.log('Dé : ' + resultatDe);
      console.log('Luck : ' + this.heros.luck);
    } else {
      console.log("tu n'as pas assez bavé, viens te battre mauviette");
      console.log('Dé : ' + resultatDe);
      console.log('Luck : ' + this.heros.luck);
      this.fight();
    }
  }

  public addObject(item: number) {
  }

  public useObject(myObj: number) {

  }

  public removeObj(myObj: number) {

  }
}
