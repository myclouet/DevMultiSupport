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

    // constructeur de la classe personnage
    /*constructor(id: string, name: string, avatar: string, strength: number, luck: number, endurance: number) {
        this._id = id;
        this.name = name;
        this.avatar = avatar;
        this.strength = strength;
        this.luck = luck;
        this.endurance = endurance;
    }*/

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
