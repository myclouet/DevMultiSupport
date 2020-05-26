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
  
  //methode pour récupérer la liste des objets
  getInventoryObjects() : Observable<ObjectInventory[]> {
    return this.http.get<ObjectInventory[]>(this.inventoryObjectUrl);
  }
 
  //methode pour récupérer un objet par son nom
  getInventoryObjectByName(name: string) : Observable<ObjectInventory> {
    return this.http.get<ObjectInventory>(this.inventoryObjectUrl+ '/'+ name);
  }
}
