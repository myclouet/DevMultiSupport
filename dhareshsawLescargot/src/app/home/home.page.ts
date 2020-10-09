import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { isNullOrUndefined } from 'util';
import { CharacterService } from '../services/character.service';
import { LanguageService } from '../services/language.service';
import { SauvegardeService } from '../services/sauvegarde.service';
import { SceneService } from '../services/scene.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  splash = true;
  newGameMessage: string;
  resumeCurrentGameMessage: string;


  constructor(private router: Router,
              private sauvegardeService: SauvegardeService,
              public storage: Storage,
              private characterService: CharacterService,
              private sceneService: SceneService,
              private translateService: TranslateService,
              private languageService: LanguageService,
              public alertController: AlertController) {
    const language = this.languageService.getLanguage();
    this.translateService.use(language);

    this.translateService.get(
      ['HomePage.newGameMessage',
       'HomePage.resumeCurrentGameMessage'
    ])
    .subscribe(res => {
      this.newGameMessage = res['HomePage.newGameMessage'];
      this.resumeCurrentGameMessage = res['HomePage.resumeCurrentGameMessage'];
   });
  }

  ngOnInit() {
      setTimeout(() => {
        this.splash = false;
      }, 4000);
    }

  newGame() {
    this.sceneService.newGame();
  }

  // restoreGame moved here to avoid circular dependancies
  restoreGame() {
    this.storage.get('stateGame').then((state)=>{
      if (isNullOrUndefined(state))
        this.noSaveAlert();
      else {
        this.sauvegardeService.setStateGame(state.hero,state.scene);
        this.characterService.heros=this.sauvegardeService.getStateGame().hero;
        this.sauvegardeService.setRestore(true);
        const idSceneToRestore=this.sauvegardeService.getStateGame().scene._id;
        this.router.navigate(['/scene/'+idSceneToRestore]);
        this.storage.get('story').then((story)=>{
          this.sauvegardeService.setStory(story);
        });
        this.restoreAlert();
      }   
    });
  }
  
  async noSaveAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reprise de la partie',
      message: 'Aucune partie sauvegardée',
      buttons: ['OK']
    });
    await alert.present();
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
