import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
/**
 * This class allows to display the Win Loos Modal Page after a battle
 */
export class WinLooseModalPage implements OnInit {

  resultatCombat: boolean;

  /** Texts to display */
  modalTitle: string;
  messageWin: string;
  messageLoose: string;
  messageContinueGame: string;

  /** Images to display */
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/bravo.png';
  imageLoose = '../../assets/modalKnockOut.png';

  constructor(public modalController: ModalController,
              private translateService: TranslateService,
              private languageService: LanguageService,
              public navParams: NavParams) {
    const language = this.languageService.getLanguage();
    this.translateService.use(language);

    this.translateService.get(
      ['WinLooseModalPage.winMessage',
       'WinLooseModalPage.looseMessage',
       'WinLooseModalPage.continueGameMessage',
       'WinLooseModalPage.modalTitle',
    ])
    .subscribe(res => {
      this.messageWin = res['WinLooseModalPage.winMessage'];
      this.messageLoose = res['WinLooseModalPage.looseMessage'];
      this.messageContinueGame = res['WinLooseModalPage.continueGameMessage'];
      this.modalTitle = res['WinLooseModalPage.modalTitle'];
   });
  }

  ngOnInit() {
    this.resultatCombat = this.navParams.data.paramBattleWin;
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
