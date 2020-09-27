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
  modelId: number;
  resultatCombat: boolean;
  message: string;
  //image: string = "../../assets/loose2.jpg";
  

  constructor( public modalController: ModalController,
               public navParams: NavParams,
               public characterService: CharacterService
               ) { }

  ngOnInit() {
    console.log(this.navParams);
    this.modelId = this.navParams.data.paramId;
    this.modalTitle = this.navParams.data.paramTitle;
    this.resultatCombat = this.characterService.battleWon;
    console.log(this.characterService.battleWon);
    

  //   console.log (this.modelId, this.modalTitle)
  //   if ( this.resultatCombat ){
  //       this.message='Vous avez gagné ! ';

  // }
  //   else {
  //     this.message= 'Vous avez perdu !';
  //   }
    this.navParams.get('value');
  }

  
  

  async closeModal(){
    const onCloseData:string = "Wrapped Up !";
    await this.modalController.dismiss(onCloseData);
  }

}
