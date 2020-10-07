import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {

  modalTitle;
  resultatCombat: boolean;

  /**
   * messages to be displayed on the modal in case of victory or defeat of the player
   */
  messageWin = 'Tu as gagné !';
  messageLoose = 'Tu as perdu !';

  /**
   * Images to display on the modal in case of victory or defeat of the player
   */
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/modalGagne.png';
  imageLoose = '../../assets/modalKnockOut.png';

  constructor(public modalController: ModalController,
              public navParams: NavParams) {}

  ngOnInit() {
    this.modalTitle = this.navParams.data.paramTitle;
    this.resultatCombat = this.navParams.data.paramBattleWin;
  }

  async closeModal() {
    const onCloseData = 'Close !';
    await this.modalController.dismiss(onCloseData);
  }
}
