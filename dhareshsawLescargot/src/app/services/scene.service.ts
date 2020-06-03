import { Injectable } from '@angular/core';
import { SCENES } from '../datas/listeScenes';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor() { }

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

}
