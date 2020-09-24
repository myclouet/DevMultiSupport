import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { SauvegardeService } from '../services/sauvegarde.service';



@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.page.html',
  styleUrls: ['./history-modal.page.scss'],
})
export class HistoryModalPage implements OnInit {

  story =[];
  
  constructor( 
    private modalController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController,
    private sauvegardeService: SauvegardeService) {  
  }

  ngOnInit() {
     //console.log(this.navParams);
     this.story = this.sauvegardeService.getStory();
     //console.log(this.story);
     //this.story = this.navParams.data.paramStory;
  }


  async closeModalHistory() {
    const onCloseData: string = "Wrapped Up"
    await this.modalController.dismiss(onCloseData);
  }

}
