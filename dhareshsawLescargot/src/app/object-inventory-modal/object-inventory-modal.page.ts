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
  /**
   *  ATTRIBUTES
   */
  modalHero: Hero;
  modalItemSelected: ObjectInventory;
  // Object to delete from the inventory list when selected by the user
  modalSplicedItemDeleted: ObjectInventory[];
  keyToAppear: boolean;
  // if inventory empty this boolean displays a message saying it's empty
  emptyInventoryObject: boolean;
  // otherwise, it will fullfilled the below tab to display the bonusPower name in french
  modalItemsDisplay: ObjectInventory[] = [];

  /**
   * CONSTRUCTOR
   */
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

/**
 * LIFECYCLE METHODS
 */
  ngOnInit() {
    this.modalHero = this.navParams.data.hero;
     // if hero has empty inventory a message is displayed otherwise modalItemsDisplay is completed with
     // the bonusPower in french
    if (this.modalHero.items === null || this.modalHero.items.length === 0) {
      this.emptyInventoryObject = true;
    } else {
      this.emptyInventoryObject = false;
       // fullfilled modalItemsDisplay to display caracteristic name in french in html
      let i: number;
      for (i = 0; i < this.modalHero.items.length; i++) {
        switch (this.modalHero.items[i].bonusPower[0]) {
          case 'endurance': {
            this.modalItemsDisplay.push({
              description: this.modalHero.items[i].description,
              image: this.modalHero.items[i].image,
              bonusPower: ['endurance', this.modalHero.items[i].bonusPower[1]],
            });
            break;
          }
          case 'strength': {
            this.modalItemsDisplay.push({
              description: this.modalHero.items[i].description,
              image: this.modalHero.items[i].image,
              bonusPower: ['force', this.modalHero.items[i].bonusPower[1]],
            });
            break;
          }
          case 'luck': {
            this.modalItemsDisplay.push({
              description: this.modalHero.items[i].description,
              image: this.modalHero.items[i].image,
              bonusPower: ['chance', this.modalHero.items[i].bonusPower[1]],
            });
            break;
          }
        }
      }
    }

    // if hero has the key, it will appear in a separate ion-card otherwise it won't appear
    if (this.modalHero.hasKey !== false) {
      this.keyToAppear = true;
    } else {
      this.keyToAppear = false;
    }
  }

  /**
   * Method which updates the inventory board of the hero
   * method called by the view to update the hero's Objects Inventory
   */
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
    this.deleteItemFromObjectInventoryList(nameItemSelected);
  }

  /**
   * Method which deletes the item selected for use from the object inventory list, method called by updateHeroInventory()
   * @param nameItemSelected :the name of the object to delete
   */
  deleteItemFromObjectInventoryList(nameItemSelected: string) {
    let startIndex: number;
    startIndex = this.modalHero.items.findIndex(
      ({ description }) => description === nameItemSelected
    );
    this.modalHero.items.splice(this.modalHero[startIndex], 1);
    if (this.modalHero.items === null || this.modalHero.items.length === 0) {
      this.emptyInventoryObject = true;
      this.modalHero.items = null;
    }
  }

  /**
   * Method enabling to close the modal and send the pictureName to newPicturePage
   */
  async closeObjectInventoryModal() {
    await this.modalController.dismiss(this.modalHero);
  }
}
