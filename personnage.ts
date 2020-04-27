class Character {
    // attributs de la classe personnage
    private _id: string;
    private name: string;
    private avatar: string;
    private strength: number;
    private luck: number;
    private endurance: number;
    private items: Array<number>;
    // private dead: boolean = false;

    // constructeur de la classe personnage
    constructor(id: string, name: string, avatar: string, strength: number, luck: number, endurance: number) {
        this._id = id;
        this.name = name;
        this.avatar = avatar;
        this.strength = strength;
        this.luck = luck;
        this.endurance = endurance;
    }

    // Liste des getters et setters
    public getId() {
        return this._id;
    }

    public getName() {
        return this.name;
    }

    public getAvatar() {
        return this.avatar;
    }

    public getStrength() {
        return this.strength;
    }

    public getLuck() {
        return this.luck;
    }

    public getEndurance() {
        return this.endurance;
    }

    public getItems() {
        return this.items;
    }

    public setStrength(strength: number) {
        this.strength = strength;
    }

    public setLuck(luck: number) {
        this.luck = luck;
    }

    public setEndurance(endurance: number) {
        this.endurance = endurance
    }

    //Méthodes diverses
    public die() {
       // this.dead = true;
        console.log('Vous êtes mort');
    }
}

class Hero extends Character {
    public chooseScene(myScene) {
    }

    public winGame() {
        console.log('Vous avez gagné !');
    }

    public looseGame() {
        console.log('Vous avez perdu !');
    }

    public rollDice() : number {
        let res = Math.floor(Math.random() * 6) + 1;
        return res;
    }

    public fight() {

    }

    public escape() {

    }

    public addObject(item: number) {
    }

    public useObject(myObj: number) {
        
    }

    public removeObj(myObj: number) {

    }

}