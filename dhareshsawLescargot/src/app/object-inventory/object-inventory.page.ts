import { Component, OnInit } from '@angular/core';
import { ObjectInventoryService } from './object-inventory.service';

@Component({
  selector: 'app-object-inventory',
  templateUrl: './object-inventory.page.html',
  styleUrls: ['./object-inventory.page.scss'],
})
export class ObjectInventoryPage implements OnInit {

  objectInventory

  constructor( private objectInventoryService: ObjectInventoryService) {}

  ngOnInit() {
    this.objectInventory = this.objectInventoryService.getInventoryObjects();
    console.log( JSON.stringify(this.objectInventory))
  }
  fermer(){
    
  }
  
}

