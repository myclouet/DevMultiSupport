import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Hero, Character } from '../classes/personnage';
import { Scene } from '../classes/scene';
import { SceneService } from '../services/scene.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  //----------------------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------------------

  heros: Hero;
  adversaire: Character;
  scene: Scene;

  //----------------------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------------------

  constructor (private characterService : CharacterService,private sceneService : SceneService,private route: ActivatedRoute) { }
    
  ngOnInit() {

  this.scene = this.sceneService.getSceneById(this.route.snapshot.paramMap.get('id'))
   
  this.heros = this.characterService.getPersonnageById("0");
  //this.characterService.heros = this.heros;
  this.adversaire = this.getAdversaire(); 
  //this.fightRandom(); ATTENTION PLANTAGE ALEATOIRE LORSQUE ACTIF
  //this.characterService.character = this.adversaire;
  }

  //----------------------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------------------

  /**
   * Initialisation adversaire
  **/
  getAdversaire(){
    return this.adversaire = this.characterService.getPersonnageById("1");
  }

  /**
   * Combat
  **/
  fightRandom() {
   this.characterService.fight();
  }

  /**
   * Fuite
  **/
  escape() {
   this.characterService.escape();
  }
}
