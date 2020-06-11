import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectInventoryModalPage } from './object-inventory-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectInventoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectInventoryModalPageRoutingModule {}
