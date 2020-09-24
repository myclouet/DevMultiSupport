import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryModalPage } from './history-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryModalPageRoutingModule {}
