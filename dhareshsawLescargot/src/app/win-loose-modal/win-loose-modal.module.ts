import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinLooseModalPageRoutingModule } from './win-loose-modal-routing.module';

import { WinLooseModalPage } from './win-loose-modal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinLooseModalPageRoutingModule,
    TranslateModule
  ],
  declarations: [WinLooseModalPage]
})
export class WinLooseModalPageModule {}
