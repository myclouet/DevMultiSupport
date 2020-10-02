import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {

  @Input() modalTitle: string;
  resultatCombat: boolean;

  
  messageWin = 'Vous avez gagné !';
  messageLoose = 'Vous avez perdu !';

  // Images à afficher selon la victoire ou la défaite du héro
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/gagne4.png';
  imageLoose = '../../assets/knock-out.png';
 
  constructor( public modalController: ModalController,
               public navParams: NavParams,
               public characterService: CharacterService
  ) { }

  ngOnInit() {
    this.modalTitle = this.navParams.data.paramTitle;
    this.resultatCombat = this.characterService.getBattleWon();
  }

  async closeModal() {
    const onCloseData:string = 'Wrapped Up !';
    await this.modalController.dismiss(onCloseData);
  }
}
