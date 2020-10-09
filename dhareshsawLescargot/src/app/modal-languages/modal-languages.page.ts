import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-modale-langues',
  templateUrl: './modal-languages.page.html',
  styleUrls: ['./modal-languages.page.scss'],
})
export class ModalLanguagesPage implements OnInit {

  constructor(private modalController: ModalController,
              private languageService: LanguageService,
              private navParams: NavParams) { }

  langue: string;

  ngOnInit() {

  }

  closeModal() {
    this.modalController.dismiss({
      langue: this.langue
    });
  }

  languageSelectedFr() {
    this.langue = 'Français';
    console.log(' Vous avez choisi ' + this.langue);
    this.languageService.setLanguage('français');

  }

  languageSelectedEn() {
    this.langue = 'Anglais';
    this.languageService.setLanguage('anglais');
    console.log(' Vous avez choisi ' + this.langue);
  }
}
