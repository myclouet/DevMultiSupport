import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinLooseModalPageRoutingModule } from './win-loose-modal-routing.module';

import { WinLooseModalPage } from './win-loose-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinLooseModalPageRoutingModule
  ],
  declarations: [WinLooseModalPage]
})
export class WinLooseModalPageModule {}
