import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CharacterService } from '../services/character.service';
import { SauvegardeService } from '../services/sauvegarde.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  splash = true;


  constructor(private router: Router,
              private sauvegardeService: SauvegardeService,
              public storage: Storage,
              private characterService: CharacterService,
              public alertController: AlertController) {
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
    this.restoreGame();
  }

  restoreGame() {
    this.storage.get('stateGame').then((state)=>{
      this.sauvegardeService.setStateGame(state.hero,state.scene); // on récupère l'état du jeu
      this.characterService.heros=this.sauvegardeService.getStateGame().hero;  // on affecte le héro du service character avec le héro récupéré
      //console.log(this.characterService.heros);
      const idSceneToRestore=this.sauvegardeService.getStateGame().scene._id;  // on récupère l'id de la scène à restaurer
      this.router.navigate(['/scene/'+idSceneToRestore]); // on restaure la scène
      this.restoreAlert();    
    });
    this.storage.get('story').then((story)=>{
      this.sauvegardeService.setStory(story);
    });
  }

  async restoreAlert() {
    const sceneTitleToRestore=this.sauvegardeService.getStateGame().scene.title;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reprise de la partie',
      message: 'Scène \n'+sceneTitleToRestore,
      buttons: ['OK']
    });
    await alert.present();
  }

}
