import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {

  modalTitle = 'RÉSULTAT';
  resultatCombat: boolean;

  // Texte à afficher
  messageWin = 'Tu as gagné !';
  messageLoose = 'Tu as perdu !';

  // Images à afficher
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/modalGagne.png';
  imageLoose = '../../assets/modalKnockOut.png';

  constructor( public modalController: ModalController,
               public characterService: CharacterService
  ) { }

  ngOnInit() {
    this.resultatCombat = this.characterService.getBattleWon();
   }

  async closeModal() {
    const onCloseData = 'Wrapped Up !';
    await this.modalController.dismiss(onCloseData);
  }
}
