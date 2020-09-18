import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { SauvegardeService } from '../services/sauvegarde.service';
import { Scene } from '../classes/scene';


@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.page.html',
  styleUrls: ['./history-modal.page.scss'],
})
export class HistoryModalPage implements OnInit {

  modalTitle:String;
  modelId:number;
  //story: {action:string , description:string}[]=[]
  story: string[] =[];
  modalScene: Scene;
  

  constructor( 
    private modalController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController,
    private sauvegardeService: SauvegardeService) {  
  }

  ngOnInit() {
    console.log(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.story = this.navParams.data.paramStory;
    this.modalScene = this.navParams.data.scene;
    console.log(this.modelId, this.modalTitle, this.story);
  }


  async closeModalHistory() {
    const onCloseData: string = "Wrapped Up"
    await this.modalController.dismiss(onCloseData);
  }

}
