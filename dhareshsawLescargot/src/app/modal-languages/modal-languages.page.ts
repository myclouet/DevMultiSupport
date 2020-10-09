import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modale-langues',
  templateUrl: './modal-languages.page.html',
  styleUrls: ['./modal-languages.page.scss'],
})
export class ModalLanguagesPage implements OnInit {

  titleLanguageModal: string;

  constructor(private modalController: ModalController,
              private languageService: LanguageService,
              private translateService: TranslateService) {
    const language = this.languageService.getLanguage();
    this.translateService.use(language);

    this.translateService.get(
      ['ModalLanguagesPage.modalTitle'])
      .subscribe(res => {
        this.titleLanguageModal = res['ModalLanguagesPage.modalTitle'];
      });
              }

   ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

  languageSelected(langue: string) {
    this.languageService.setLanguage(langue);
  }
}
