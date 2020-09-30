import { Injectable } from '@angular/core';
import { SCENES } from '../datas/listeScenes';
import { Router } from '@angular/router';
import { CharacterService } from './character.service';
import { SauvegardeService } from './sauvegarde.service';
import { Scene } from '../classes/scene';
import { PERSONNAGES, HERO } from '../datas/listePersonnages';

@Injectable({
  providedIn: 'root'
})
export class SceneService {


  constructor(private characterService: CharacterService, private sauvegardeService: SauvegardeService, private router: Router) { }

  // ----------------------------------------------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------------------------------------------

  /**
   * Obtention de la scene par son numéro id
  **/
  getSceneById(id: string) {
    const scene = SCENES.find(
      (sceneObject) => {
        return sceneObject._id === id;
      });
    return scene;
  }

  newGame() {
    this.sauvegardeService.resetSauvegarde();
    this.characterService.initHero();   
    this.router.navigate(['scene/', '1']);
  }

}
