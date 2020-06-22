import { Injectable } from '@angular/core';
import { SCENES } from '../datas/listeScenes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor(private router: Router) { }

  //----------------------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------------------

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
    this.router.navigate(['/scene/1']);
  }

}
