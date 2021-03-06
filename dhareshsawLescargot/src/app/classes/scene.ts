import { Character } from './personnage';
import { ObjectInventory } from './object';

export class Scene {
    _id: string;
    title: string;
    description: string;
    picture: string;
    encounter: string;
    bonusObject: ObjectInventory;
    bonusPower: [string, number];
    isBattle: boolean;
    battleWon: boolean;
    nextScenes: string [];
    previousScene: string;
    audioText: string;
    progressionIndex: number;
    hasKey?: boolean = false;
}