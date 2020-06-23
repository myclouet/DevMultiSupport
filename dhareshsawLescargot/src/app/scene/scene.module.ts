import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScenePageRoutingModule } from './scene-routing.module';

import { ScenePage } from './scene.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ScenePageRoutingModule
  ],
  declarations: [ScenePage]
})
export class ScenePageModule {}
