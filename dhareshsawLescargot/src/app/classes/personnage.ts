import { ObjectInventory } from './objectInventory';

export class Character {
    // attributs de la classe personnage
    // tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    avatar: string;
    strength: number;
    luck: number;
    endurance: number;
    items: ObjectInventory;
    // private dead: boolean = false;
}

export class Hero extends Character {
    // tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    avatar: string;
    strength: number;
    luck: number;
    endurance: number;
    items: ObjectInventory;
}
