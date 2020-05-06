import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombatsPage } from './combats.page';

const routes: Routes = [
  {
    path: '',
    component: CombatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombatsPageRoutingModule {}
