import { ObjectInventory } from '../classes/object';

export class Character {
    // attributs de la classe personnage
    // tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    avatar: string;
    strength: number;
    luck: number;
    endurance: number;
    items: ObjectInventory[];
}

export class Hero extends Character {
    hasKey: boolean;
}
