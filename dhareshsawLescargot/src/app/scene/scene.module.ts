import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScenePageRoutingModule } from './scene-routing.module';

import { ScenePage } from './scene.page';
import { ModalLanguagesPage } from '../modal-languages/modal-languages.page';
import { ModalLanguagesPageModule } from '../modal-languages/modal-languages.module';

@NgModule({
   entryComponents: [
    ModalLanguagesPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScenePageRoutingModule,
    ModalLanguagesPageModule
  ],
  declarations: [
    ScenePage,
  ],
 
})
export class ScenePageModule {}
