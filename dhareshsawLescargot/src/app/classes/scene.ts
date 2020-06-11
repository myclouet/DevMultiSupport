import { Character } from './personnage';
import { ObjectInventory } from './objectInventory';

export class Scene {
    _id : string;
    title : string;
    idCharacter: string;
    description : string;
    picture : string;
    encounter : Character;
    bonusObject : ObjectInventory;
    bonusPower : [string, number];
    isBattle : boolean;
    battleWon : boolean;
    nextScenes : string [];
    previousScene : string;
}