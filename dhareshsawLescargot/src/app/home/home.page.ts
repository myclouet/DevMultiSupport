import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SauvegardeService } from '../services/sauvegarde.service';
import { CharacterService } from '../services/character.service';
import { SceneService } from '../services/scene.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  splash = true;


  constructor(private router: Router, private sauvegardeService: SauvegardeService) {
  }

  ngOnInit() {
      setTimeout(() => {
        this.splash = false;
      }, 4000);
    }

  newGame() {
    this.router.navigate(['/scene/1']);
  }

  loadGame() {
    this.sauvegardeService.restoreGame();
  }  


}
