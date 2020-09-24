import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
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
  // Hero item's id selected by the player
  modalItemId: number;
  modalTabWithoutKey: ObjectInventory[];
  keyToAppear: boolean;

  // ---------- CONSTRUCTOR ------------ //
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController
  ) {}

  // -------- LIFECYCLE METHODS --------- //
  ngOnInit() {
    this.modalHero = this.navParams.data.hero;
    // if hero has the key, it will appear in a separate ion-card otherwise it won't appear
    if (this.modalHero.key !== null) {
      this.keyToAppear = true;
    } else {
      this.keyToAppear = false;
    }
  }

  // ---------- METHOD ------------ //
  // method called by the view to update the hero Object Inventory
  updateHeroInventory(nameItemSelected: string) {
    this.modalItemSelected = this.modalHero.items.find(
      ({ description }) => description === nameItemSelected
    );

    // update of the hero's bonusPower
    if (this.modalItemSelected.bonusPower[0] === 'endurance') {
      this.modalHero.endurance =
        this.modalHero.endurance + this.modalItemSelected.bonusPower[1];
    } else {
      if (this.modalItemSelected.bonusPower[0] === 'luck') {
        this.modalHero.luck =
          this.modalHero.luck + this.modalItemSelected.bonusPower[1];
      } else {
        if (this.modalItemSelected.bonusPower[0] === 'strength') {
          this.modalHero.strength =
            this.modalHero.strength + this.modalItemSelected.bonusPower[1];
        }
      }
    }

    // METTRE A JOUR L INVENTAIRE DU HERO LORSQUE LA CLASSE PERSONNAGE SERA OK
    // this.modalHero.find{((items[0])) => item[] ===
    // tslint:disable-next-line: radix
    // FINIR LE CODE CI DESSOUS - modif faites le 08/09/20
    // this.modalItemId = parseInt(this.modalHero._id);
    // this.modalHero.items.splice(this.modalItemId , 1);

    // METHODE FRIGO DES FOURMIS POUR SUPPRIMER UN ELEMENT DU TABLEAU
    // addToCart(i, id_member: number, id_ingredient: number, qty: number) {
    //   this.tableauPossesseurs.splice(i, 1);
    //   this.cartService.addToCart(id_member, id_ingredient, qty);
    // }
    // }
  }

  // method enabling to close the modal and send the pictureName to newPicturePage
  async closeObjectInventoryModal() {
    await this.modalController.dismiss(this.modalHero);
  }
}
