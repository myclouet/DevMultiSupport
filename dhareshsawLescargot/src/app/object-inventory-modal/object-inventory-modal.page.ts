import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Hero } from '../classes/personnage';
import { ObjectInventory } from '../classes/object';

@Component({
  selector: 'app-object-inventory-modal',
  templateUrl: './object-inventory-modal.page.html',
  styleUrls: ['./object-inventory-modal.page.scss'],
})
export class ObjectInventoryModalPage implements OnInit {
  // ---------- ATTRIBUTES ------------ //
  modalHero: Hero;
  modalItemSelected: ObjectInventory;
  // Object to delete from the inventory list when selected by the user
  modalSplicedItemDeleted: ObjectInventory[];
  keyToAppear: boolean;
  // if inventory empty this boolean displays a message saying it's empty
  emptyInventoryObject: boolean;


  // ---------- CONSTRUCTOR ------------ //
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  // -------- LIFECYCLE METHODS --------- //
  ngOnInit() {
    this.modalHero = this.navParams.data.hero;

    // if hero has the key, it will appear in a separate ion-card otherwise it won't appear
    if (this.modalHero.hasKey !== null) {
      this.keyToAppear = true;
    } else {
      this.keyToAppear = false;
    }
    
    // if hero has empty inventory a message is displayed
    if (this.modalHero.items === null) {
      this.emptyInventoryObject = true;
    } else {
      this.emptyInventoryObject = false;
    }
  }

  // ---------- METHOD ------------ //

  // method called by the view to update the hero's Objects Inventory
  updateHeroInventory(nameItemSelected: any) {
    this.modalItemSelected = this.modalHero.items.find(
      ({ description }) => description === nameItemSelected
    );

    switch (this.modalItemSelected.bonusPower[0]) {
        case 'endurance': {
          this.modalHero.endurance += this.modalItemSelected.bonusPower[1];
          break;
        }
        case 'luck': {
          this.modalHero.luck += this.modalItemSelected.bonusPower[1];
          break;
        }
        case 'strength': {
          this.modalHero.strength += this.modalItemSelected.bonusPower[1];
          break;
        }
    }
    this.deleteItemFromObjectInventoryList(this.modalItemSelected.description, nameItemSelected)
   }

  // Delete the item selected for use from the object inventory list
  deleteItemFromObjectInventoryList(modalItemSelected: any, nameItemSelected : string) {
     var startIndex : number; 
     startIndex = this.modalHero.items.findIndex(
        ({ description}) => description === nameItemSelected
          );
      this.modalHero.items.splice(this.modalHero[startIndex], 1 );
      if ((this.modalHero.items == null) || (this.modalHero.items.length == 0)) {
          this.emptyInventoryObject = true;
          this.modalHero.items = null;
        }
   }

  // method enabling to close the modal and send the pictureName to newPicturePage
  async closeObjectInventoryModal() {
    console.log(JSON.stringify(this.modalHero));
    await this.modalController.dismiss(this.modalHero);

  }
}
