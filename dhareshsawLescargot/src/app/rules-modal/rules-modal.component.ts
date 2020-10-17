import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-rules-modal',
    templateUrl: './rules-modal.component.html',
    styleUrls: ['./rules-modal.component.scss'],
})
export class RulesModalComponent {

    constructor(private modalCtrl: ModalController) {
    }
  dismissRulesModal() {
    this.modalCtrl.dismiss();

  }
}

