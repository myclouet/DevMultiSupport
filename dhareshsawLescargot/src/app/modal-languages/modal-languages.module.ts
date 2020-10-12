import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLanguagesPageRoutingModule } from './modal-languages-routing.module';

import { ModalLanguagesPage } from './modal-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLanguagesPageRoutingModule
  ],
  declarations: [ModalLanguagesPage]
})
export class ModalLanguagesPageModule {}
