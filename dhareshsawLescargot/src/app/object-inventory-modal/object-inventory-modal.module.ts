import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectInventoryModalPageRoutingModule } from './object-inventory-modal-routing.module';

import { ObjectInventoryModalPage } from './object-inventory-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectInventoryModalPageRoutingModule
  ],
  declarations: [ObjectInventoryModalPage]
})
export class ObjectInventoryModalPageModule {}
