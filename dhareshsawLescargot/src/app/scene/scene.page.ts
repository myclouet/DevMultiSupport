import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../personnage';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  heros: Hero;
  adversaire: Character;

  constructor(
    private characterService : CharacterService
  ) { }

  ngOnInit() {
    this.fightRandom();
    this.heros = this.characterService.getPersonnageById("0");
    this.characterService.heros = this.heros;
    console.log(this.heros);
    this.adversaire = this.getAdversaire();
    this.characterService.character = this.adversaire;
  }

  //initialisation adversaire
  getAdversaire(){
    return this.adversaire = this.characterService.getPersonnageById("1");
  }


  //combat
  fightRandom() {
   this.characterService.fight();
  }

  //fuite
  escape() {
   this.characterService.escape();
  }

}
