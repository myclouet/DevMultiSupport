import { Component, OnInit } from '@angular/core';
import { ObjectInventoryService } from '../services/object-inventory.service';
import { ObjectInventory } from '../classes/objectInventory';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-inventory',
  templateUrl: './object-inventory.page.html',
  styleUrls: ['./object-inventory.page.scss'],
})
export class ObjectInventoryPage implements OnInit {

  objectInventory: ObjectInventory [] = [];
  public currentObjectInventory$: Observable<ObjectInventory[]>;

  constructor( private objectInventoryService: ObjectInventoryService,  private router: Router,) {}

  ngOnInit() {
    // this.currentObjectInventory$ = this.objectInventoryService.getInventoryObjects();
    // console.log( JSON.stringify(this.currentObjectInventory$));
    this.objectInventory = this.objectInventoryService.getInventoryObjects();
  }
  fermer() {
    this.router.navigate(['/home']);
  }
}

