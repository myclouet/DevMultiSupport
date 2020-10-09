import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-modale-langues',
  templateUrl: './modal-languages.page.html',
  styleUrls: ['./modal-languages.page.scss'],
})
export class ModalLanguagesPage implements OnInit {

  constructor(private modalController: ModalController,
              private languageService: LanguageService
             ) { }

  langue: string;

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  languageSelectedFr() {
    this.langue = 'fr';
    this.languageService.setLanguage('fr');
  }

  languageSelectedEn() {
    this.langue = 'en';
    this.languageService.setLanguage('en');
  }
}
