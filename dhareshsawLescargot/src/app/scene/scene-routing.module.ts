import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenePage } from './scene.page';

const routes: Routes = [
  {
    path: '',
    component: ScenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenePageRoutingModule {}
