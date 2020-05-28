import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { SceneService } from '../services/scene.service';



@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  heros: Hero;
  adversaire: Character;
  scene: Scene;
  id = '2';

  constructor(
    private characterService : CharacterService,
    private sceneService : SceneService
  ) { }

  ngOnInit() {
    this.fightRandom();
    this.heros = this.characterService.getPersonnageById("0");
    this.characterService.heros = this.heros;
    console.log(this.heros);
    this.adversaire = this.getAdversaire();
    this.characterService.character = this.adversaire;
    this.getScene();
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

  //scene
  getScene(){
    return this.scene = this.sceneService.getSceneById(this.id);
  }

}
