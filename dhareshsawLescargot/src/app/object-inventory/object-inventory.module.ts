import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectInventoryPageRoutingModule } from './object-inventory-routing.module';

import { ObjectInventoryPage } from './object-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectInventoryPageRoutingModule
  ],
  declarations: [ObjectInventoryPage]
})
export class ObjectInventoryPageModule {}
