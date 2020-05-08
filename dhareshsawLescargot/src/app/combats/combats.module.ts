import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombatsPageRoutingModule } from './combats-routing.module';

import { CombatsPage } from './combats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombatsPageRoutingModule
  ],
  declarations: [CombatsPage]
})
export class CombatsPageModule {}
