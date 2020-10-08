import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinLooseModalPage } from './win-loose-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WinLooseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinLooseModalPageRoutingModule {}
