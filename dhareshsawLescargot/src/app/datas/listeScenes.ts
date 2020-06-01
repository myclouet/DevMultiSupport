import { Scene } from '../classes/scene';

export const SCENES: Scene[] = [
   {
    _id : '2',
    title : 'Introduction',
    description : 'Vous vous déplacez tranquillement, lentement au bord du chemin par un temps ensoleillé. Vous êtes un jeune gastéropode et vous vous réjouissez. Une belle journée s’annonce. Tout est pour le mieux vous dites-vous. Un temps magnifique pour une journée que vous souhaitez fort agréable. Vous avez rendez-vous. Plusieurs de vos amis vous ont convié à la fête. Légumes à gogo, salade, chicorée, batavia, et tant d’autres. Ils ont tout prévu pour un repas vert gargantuesque. Vegan, c’est votre credo mais veggie avec des amis, c’est votre gimmick. Vous savez que vous avez un long chemin à parcourir pour atteindre ce champ rêvé. Semé d’embûches ? Sans doute mais vous avez promis. C’est parti.',
    picture : '../../assets/champLaitue.jpg',
    encounter : null,
    bonusObject : null,
    bonusPower : [null, null],
    isBattle : false,
    battleWon : false, 
    nextScenes: ['3'],
    previousScene: null,
   },
   {
    _id : '3',
    title : 'Vanessa le chat',
    description : "Vous êtes en pleine progression lorsque le ciel s’assombrit. Une immense masse vous masque l’horizon. Gigantesque, poilue, vous n'en voyez tout d’abord que les pattes griffues. Félines. Un chat. Votre première rencontre et vous tombez sur un chat. - « Bonjour, La limace ! » - « Je suis un escargot en fait » - « C’est pareil la spirale en plus. Sauf que toi on te mange ! » - « Oui, enfin pas tous » - « Je n’aime pas trop mais je peux me laisser tenter ce matin » La discussion est assez désagréable et le jeu est serré, il vous faut trouver de quoi occuper ce chat. Si vous souhaitez lui donner le trou d'une famille de souris que vous avez repéré plus tot, c'est par la gauche. Si vous souhaitez le convaincre de ne pas vous manger grace à votre réthorique baveuse, c'est par la droite. Enfin, si vous souhaitez attirer l'attention d'un lama...quoi? un lama??!! Oui oui c'est bien un lama qui broute nonchalament de l'herbe à 2 mètres de vous cliquez tout droit",
    picture : '',
    encounter : null,
    bonusObject : null,
    bonusPower : [null, null],
    isBattle : false,
    battleWon : false,
    nextScenes: ['4','5','6'],
    previousScene: '2',   
   }
]