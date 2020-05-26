import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectInventoryPage } from './object-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectInventoryPageRoutingModule {}
