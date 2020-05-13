import { Injectable } from '@angular/core';
import { ObjectInventory } from './objectInventory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectInventoryService {

  inventoryObjectUrl = '/assets/inventoryObject.json';
  inventoryObject: ObjectInventory[]= []
  
  constructor( private http: HttpClient) { }

  getInventoryObjects() : Observable<ObjectInventory[]> {
    return this.http.get<ObjectInventory[]>(this.inventoryObjectUrl);
  }
  // @Myriam//
  //methode pour récupérer un objet par son id dés que l'on aura un storage, pour le moment les objets n'ont pas d'id
  getInventoryObjectByID(id: string) : Observable<ObjectInventory> {
    return this.http.get<ObjectInventory>(this.inventoryObjectUrl+ '/'+ id);
  }


}
