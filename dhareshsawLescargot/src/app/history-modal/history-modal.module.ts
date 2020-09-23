import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryModalPageRoutingModule } from './history-modal-routing.module';

import { HistoryModalPage } from './history-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryModalPageRoutingModule
  ],
  declarations: [HistoryModalPage]
})
export class HistoryModalPageModule {}
