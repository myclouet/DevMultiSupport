import { Injectable } from '@angular/core';
import { SCENES } from '../datas/listeScenes';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor() { }

  getSceneById(id){
    return SCENES.find(({_id})=> _id === id);
  }

}
