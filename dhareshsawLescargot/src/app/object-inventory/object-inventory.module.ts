import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectInventoryPageRoutingModule } from './object-inventory-routing.module';

import { ObjectInventoryPage } from './object-inventory.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ObjectInventoryPage
      }
    ]),
    // si je récupère le routing comme ci-dessus alors XX la ligne ci dessous et le 
    // object-inventory-routing.module.ts
    // ObjectInventoryPageRoutingModule
  ],
  declarations: [ObjectInventoryPage]
})
export class ObjectInventoryPageModule {}
