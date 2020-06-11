import { Injectable } from '@angular/core';
import { ObjectInventory } from '../classes/object';
import { OBJECTINVENTORY } from '../datas/listeObjectInventory';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectInventoryService {

  // inventoryObjectUrl = '/assets/inventoryObject.json';
  inventoryObject: ObjectInventory[] = [];

  // constructor( private http: HttpClient) { }
  constructor( ) { }

  // methode pour récupérer la liste des objets
  // getInventoryObjects(): Observable<ObjectInventory[]> {
    // return this.http.get<ObjectInventory[]>(this.inventoryObjectUrl);
  // }

  getInventoryObjects() {
    return OBJECTINVENTORY;
  }
  // methode pour récupérer un objet par son nom
  // getInventoryObjectByName(name: string): Observable<ObjectInventory> {
  //   return this.http.get<ObjectInventory>(this.inventoryObjectUrl + '/' + name);
  // }

  getInventoryObjectByName(name) {
    return OBJECTINVENTORY.find(({description}) => description === name);
  }

   getInventoryObjectById(id) {
    return OBJECTINVENTORY.find(({_id}) => _id === id);
  }

  viewInventoryList() {

  }

  SelectItem() {

  }

}
