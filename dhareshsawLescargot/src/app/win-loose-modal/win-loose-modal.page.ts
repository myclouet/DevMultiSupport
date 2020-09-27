import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-win-loose-modal',
  templateUrl: './win-loose-modal.page.html',
  styleUrls: ['./win-loose-modal.page.scss'],
})
export class WinLooseModalPage implements OnInit {

  modalTitle: string;
  modelId: number;
  resultatCombat: boolean = false;
  message: string;
  image: string = "../../assets/loose2.jpg";
  

  constructor( public modalController: ModalController,
               public navParams: NavParams
               ) { }

  ngOnInit() {
    console.log(this.navParams);
    this.modelId = this.navParams.data.paramId;
    this.modalTitle= this.navParams.data.paramTitle;

    console.log (this.modelId, this.modalTitle)
    if ( this.resultatCombat ){
        this.message='Vous avez gagné ! ';

  }
    else {
      this.message= 'Vous avez perdu !';
    }
  }

  

  async closeModal(){
    const onCloseData:string = "Wrapped Up !";
    await this.modalController.dismiss(onCloseData);
  }

}
