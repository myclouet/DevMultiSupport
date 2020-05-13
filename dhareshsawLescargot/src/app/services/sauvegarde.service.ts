import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SauvegardeService {
  //private heroInitial: Hero
  //private etatduJeu: {hero: Hero, scene: Scene}
  private histoire: {action:string , description:string}[]=[]

  constructor() { }

}
