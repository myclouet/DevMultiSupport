import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {


  resultatCombat: boolean;
  
  // Texte à afficher dans la modale
  modalTitle;
  messageWin: string;
  messageLoose: string;
  messageContinuerJeu: string;

  // Images à afficher
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/modalGagne.png';
  imageLoose = '../../assets/modalKnockOut.png';

  constructor(public modalController: ModalController,
              private translateService: TranslateService,
              public navParams: NavParams) {
    this.translateService.use('fr');

    this.translateService.get( 
      ['WinLooseModalPage.winMessage',
       'WinLooseModalPage.looseMessage',
       'WinLooseModalPage.continueGameMessage'
    ])
    .subscribe(res => { 
      this.messageWin = res['WinLooseModalPage.winMessage'];
      this.messageLoose = res['WinLooseModalPage.looseMessage'];
      this.messageContinuerJeu = res['WinLooseModalPage.continueGameMessage'];
   });
  }

  ngOnInit() {
    this.modalTitle = this.navParams.data.paramTitle;
    this.resultatCombat = this.navParams.data.paramBattleWin;
  }

  async closeModal() {
    const onCloseData = 'Close !';
    await this.modalController.dismiss(onCloseData);
  }
}
