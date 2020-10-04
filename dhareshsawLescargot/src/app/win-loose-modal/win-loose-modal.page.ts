import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {

  modalTitle = 'RÉSULTAT';
  resultatCombat: boolean;
  messageWin = 'Tu as gagné !';
  messageLoose = 'Tu as perdu !';
  fondEcranWin = '../../assets/fondCombatGagne.jpg';
  fondEcranLoose = '../../assets/fondCombatPerdu.jpg';
  imageWin = '../../assets/modalGagne.png';
  imageLoose = '../../assets/modalKnockOut.png';

  constructor( public modalController: ModalController,
              // public navParams: NavParams,
               public characterService: CharacterService
  ) { }

  ngOnInit() {
    // console.log(this.navParams);
   // this.modalTitle = this.navParams.data.paramTitle;
    this.resultatCombat = this.characterService.getBattleWon();
    console.log('ICIIII' + this.resultatCombat);

    // console.log(this.characterService.battleWon);


  //   console.log ( this.modalTitle)
  //   if ( this.resultatCombat ){
  //       this.message='Vous avez gagné ! ';
  // }
  //   else {
  //     this.message= 'Vous avez perdu !';
  //   }
  //   this.navParams.get('value');
   }

     async closeModal() {
    const onCloseData = 'Wrapped Up !';
    await this.modalController.dismiss(onCloseData);
  }
}
