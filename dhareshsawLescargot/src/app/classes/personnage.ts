export class Character {
    // attributs de la classe personnage
    // tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    avatar: string;
    strength: number;
    luck: number;
    endurance: number;
    items: Array<number>;
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
    items: Array<number>;
}
