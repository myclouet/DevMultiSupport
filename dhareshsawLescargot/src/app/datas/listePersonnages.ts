import { isNull } from 'util';
import { Character, Hero } from '../classes/personnage';

export const HERO: Hero =   
 {
  _id: '0',
  name: 'Dhareshsaw l\'escargot',
  avatar: './assets/avatars/dhareshsaw.png',
  strength: 4,
  luck: 4,
  endurance: 3,
  items: null,
  hasKey: false,
};

export const PERSONNAGES: Character[] = [
  // !!!!!!!!! ATTENTION !!!!!!! Les valeurs strength, luck et endurance ne sont que des valeurs aléatoires pour les tests !!!! A MODIFIER
    HERO,
  {
    _id: '1',
    name: 'Jojo le bourricot',
    avatar: './assets/avatars/johann.png',
    strength: 3,
    luck: 5,
    endurance: 4,
    items: null,
  },
  {
    _id: '2',
    name: 'Anabelle la sauterelle',
    avatar: './assets/avatars/annabelle.png',
    strength: 5,
    luck: 2,
    endurance: 4,
    items: null
  },
  {
    _id: '3',
    name: 'Bobo le corbeau',
    avatar: './assets/avatars/boris.png',
    strength: 4,
    luck: 4,
    endurance: 5,
    items: null
  },
  {
    _id: '4',
    name: 'Élodie la pie',
    avatar: './assets/avatars/elodie.png',
    strength: 2,
    luck: 6,
    endurance: 4,
    items: null
  },
  {
    _id: '5',
    name: 'Hervé le sanglier',
    avatar: './assets/avatars/herve.png',
    strength: 5,
    luck: 5,
    endurance: 5,
    items: null
  },
  {
    _id: '6',
    name: 'Jean-Christo le crapaud',
    avatar: './assets/avatars/jc.png',
    strength: 4,
    luck: 3,
    endurance: 4,
    items: null
  },
  {
    _id: '7',
    name: 'Mathias la limace',
    avatar: './assets/avatars/mathias.png',
    strength: 5,
    luck: 3,
    endurance: 4,
    items: null
  },
  {
    _id: '8',
    name: 'Noémie la fourmi',
    avatar: './assets/avatars/noemie.png',
    strength: 3,
    luck: 4,
    endurance: 4,
    items: null
  },
  {
    _id: '9',
    name: 'Paula le koala',
    avatar: './assets/avatars/paula.png',
    strength: 4,
    luck: 4,
    endurance: 5,
    items: null
  },
  {
    _id: '10',
    name: 'Rapha le lama',
    avatar: './assets/avatars/raphael.png',
    strength: 5,
    luck: 3,
    endurance: 4,
    items: null
  },
  {
    _id: '11',
    name: 'Titou le tatou',
    avatar: './assets/avatars/titou.png',
    strength: 3,
    luck: 4,
    endurance: 4,
    items: null
  },
  {
    _id: '12',
    name: 'Vanessa le chat',
    avatar: './assets/avatars/vanessa.png',
    strength: 3,
    luck: 5,
    endurance: 4,
    items: null
  },
  {
    _id: '13',
    name: 'Yvan l\'habitant',
    avatar: './assets/avatars/yvan.png',
    strength: 4,
    luck: 4,
    endurance: 5,
    items: null
  }
];
