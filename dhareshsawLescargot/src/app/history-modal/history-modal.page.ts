import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
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
    private sauvegardeService: SauvegardeService) {  
  }

  ngOnInit() {
     this.story = this.sauvegardeService.getStory();
  }


  async closeModalHistory() {
    const onCloseData: string = "Wrapped Up"
    await this.modalController.dismiss(onCloseData);
  }

}
