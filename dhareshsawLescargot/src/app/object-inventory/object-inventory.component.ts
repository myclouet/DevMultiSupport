import { Component, OnInit } from '@angular/core';
import { ObjectInventoryService } from './object-inventory.service';

@Component({
  selector: 'app-object-inventory',
  templateUrl: './object-inventory.component.html',
  styleUrls: ['./object-inventory.component.scss'],
})
export class ObjectInventoryComponent implements OnInit {

  objectInventory

  constructor( private objectInventoryService: ObjectInventoryService) {}

  ngOnInit() {
    this.objectInventory = this.objectInventoryService.getInventoryObjects();
    console.log( JSON.stringify(this.objectInventory))
  }
  
}
