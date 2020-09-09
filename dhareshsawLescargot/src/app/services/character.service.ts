import { Injectable } from '@angular/core';
import { Character, Hero } from '../classes/personnage';
import { PERSONNAGES } from '../datas/listePersonnages';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
character: Character;
heros: Hero;
battleWon: boolean;

  constructor() {
    this.heros = this.getPersonnageById('0'); // initialisation du héro
   }

  // Liste de personnages
  getPersonnages() {
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
    this.battleWon = true;
  }

  public looseGame() {
    console.log('Vous avez perdu !');
    this.battleWon = false;
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
  }

  // combat conditionnel
  conditionnalFight() {
    if (this.heros.strength + (this.heros.luck - this.rollDice()) > this.character.endurance) {
      this.winGame();
      return true;
    } else if (this.character.strength + (this.character.luck - this.rollDice()) >= this.heros.endurance) {
      this.looseGame();
      return false;
    }
    else console.log("vainqueur non déterminé");
  }

  // combat automatique
  automaticFight(){
    let result = 0;
    result = Math.floor(Math.random() * 4);
    let res: boolean = false;

    switch (result) {
      case 0:
        this.heros.strength = this.heros.strength - 1;
        console.log("strength : " + this.heros.strength);
        res = true;
        break;
      
      case 1:
        this.heros.endurance = this.heros.endurance - 1;
        console.log("endurance : " +this.heros.endurance);
        res = true;
        break;
      
      case 2:
        this.heros.luck = this.heros.luck - 1;
        console.log("luck : " +this.heros.luck);
        res = true;
        break;

      case 3:
        this.die();
        break;
    }
    return res;
  }

  // fuite
  public escape() {
    const resultatDe = this.rollDice();
    if (resultatDe < this.heros.luck) {
      console.log('Je me suis échappé');
      console.log('Dé : ' + resultatDe);
      console.log('Luck : ' + this.heros.luck);
    } else {
      console.log('tu n\'as pas assez bavé, viens te battre mauviette');
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
