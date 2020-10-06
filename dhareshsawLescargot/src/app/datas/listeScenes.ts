import { Scene } from '../classes/scene';

export const SCENES: Scene[] = [
   {
     _id: '1',
     title: 'Prologue',
     // tslint:disable-next-line: max-line-length
     description: 'Vous etes un jeune escargot et vous vous prénommez Dhareshsaw. Vos parents sont aimants, votre foyer douillet et sur. Cependant dans 10 jours c\'est la fête du potager, et les jeunes escargots se sont tous donnés rendez-vous au champ des salades. Cet évènement marque le début de l\’âge adulte pour les escargots. Vous étendez un œil de votre trou et sortez.',
     picture: '../assets/fond-rencontre.png',
     encounter: '0',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['2'],
     previousScene: null,
     audioText: 'assets/audio/scene01.mp3',
     progressionIndex: 0,
   },
   {
     _id: '2',
     title: 'Introduction',
     // tslint:disable-next-line: max-line-length
     description: 'Vous vous déplacez tranquillement par un temps ensoleillé. \n  Une belle journée s’annonce. Vous avez rendez-vous. Plusieurs de vos amis vous ont convié à la fête. Légumes à gogo, salade, chicorée, batavia, et tant d’autres. Vous savez que vous avez un long chemin à parcourir pour atteindre ce champ rêvé. Semé d’embûches ? Sans doute mais vous avez promis. Vous vous mettez en route.',
     picture: '../../assets/fond-rencontre.png',
     encounter: '0',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['3'],
     previousScene: '1',
     audioText: 'assets/audio/scene02.mp3',
     progressionIndex: 5
   },
   {
     _id: '3',
     title: 'Vanessa le chat',
     // tslint:disable-next-line: max-line-length
     description: 'Vous êtes en pleine progression lorsque le ciel s\'assombrit. Une immense masse vous masque l’horizon. Un chat. Votre première rencontre et vous tombez sur un chat. \n - « Bonjour, La limace ! » \n- « Je suis un escargot en fait » \n- « C’est pareil la spirale en plus. Sauf que toi on te mange ! » \n - « Oui, enfin pas tous » \n - « Je n’aime pas trop mais je peux me laisser tenter ce matin » \n Le jeu est serré, il vous faut trouver de quoi occuper ce chat. Si vous souhaitez lui donner le trou d\'une famille de souris que vous avez repéré plus tôt, c\'est par la droite. Si vous souhaitez le convaincre de ne pas vous manger grâce à votre rhétorique baveuse, c\'est par la gauche. Enfin, si vous souhaitez attirer l\'attention d\'un lama qui broute nonchalamment de l\'herbe à 2 mètres de vous. Allez tout droit.',
     picture: '../../assets/fond-rencontre.png',
     encounter: '12',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['4', '5', '6'],
     previousScene: '2',
     audioText: 'assets/audio/scene03.mp3',
     progressionIndex: 10
   },
   {
     _id: '4',
     title: 'La balance',
     // tslint:disable-next-line: max-line-length
     description: '« On peut faire un marché ? » glapissez-vous \n - « Quel genre ? » \n - « Si je t’explique où se trouve un beau trou de souris avec toute la famille dedans ? » \n - « Combien de souris ? »\n - « Trois et peut-être plus » \n - « Marché conclu »> En échange de l’adresse de la famille de rongeurs. Vous déguerpissez avant qu\'il change d\'avis en courant si vite que vous gagnez de l\'endurance',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: ["endurance", 3],
     isBattle: false,
     battleWon: false,
     nextScenes: ['7'],
     previousScene: '3',
     audioText: 'assets/audio/scene04.mp3',
     progressionIndex: 12
   },
   {
     _id: '5',
     title: 'Escarghauer',
     // tslint:disable-next-line: max-line-length
     description: 'Vos cours de rhétorique vous reviennent en tête. Votre professeur, monsieur Escarghauer, serait fier de vous. Vous embrouillez Vanessa à tel point qu\'elle finit par s\'enfuir. La voie est libre et vous apercevez une maison qui semble être le bon chemin pour aller droit vers le champ des salades.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['8'],
     previousScene: '3',
     audioText: 'assets/audio/scene05.mp3',
     progressionIndex: 14
   },
   {
     _id: '6',
     title: 'L\'aide de Rapha',
     // tslint:disable-next-line: max-line-length
     description: 'Vous criez de toutes vos forces pour appeler à l\'aide, c\'est à dire que vous ne faites quasiment aucun bruit. Contre toute attente, le lama toujours aussi nonchalant tourne la tête vers le chat avec un air agacé. Il envoie un crachat si puissant et si fourni qu\'il balaye le chat. Celui-ci s\'enfuit a toute vitesse.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['9'],
     previousScene: '3',
     audioText: 'assets/audio/scene06.mp3',
     progressionIndex: 15
   },
   {
     _id: '7',
     title: 'Honte sur vous',
     // tslint:disable-next-line: max-line-length
     description: 'Vous continuez votre route...vous avez du remords, mais c\'est trop tard, le massacre dont vous êtes à l\'origine vous poursuivra toujours. En attendant une bande de rats s\'est regroupée devant vous, à environ 4 mètres. Les ennuis sérieux commencent. Si vous décidez de prendre votre courage à deux antennes, et d\'aller au-devant du gang de rats, allez tout droit. À droite il y a une maison ou vous pouvez vous réfugier. À gauche il y a un chemin de fer, mais les trains qui y passent pourraient vous broyer en un instant',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['8', '10', '11'],
     previousScene: '4',
     audioText: 'assets/audio/scene07.mp3',
     progressionIndex: 14
   },
   {
     _id: '8',
     title: 'Maison',
     // tslint:disable-next-line: max-line-length
     description: 'La maison semble entretenue, il y a donc quelqu\'un qui habite ici. Une odeur de vieille huile et des pièces de mécanique trainent çà et là. Sans encombre, vous arrivez sur le pas de la porte. Vous vous trouvez devant une cour et il va falloir la traverser pour continuer votre voyage.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['14'],
     previousScene: null,
     audioText: 'assets/audio/scene08.mp3',
     progressionIndex: 18
   },
   {
     _id: '9',
     title: 'Rapha le lama',
     // tslint:disable-next-line: max-line-length
     description: 'Vous vous retournez vers lui, des larmes dans les yeux...il vous, nonchalant : \n -"Salut, moi c\'est Rapha". -"Moi c\'est Dhareshsaw" répondez-vous. -"Allez on trinque" dit-il en vous tendant une canette de bière. "C\'est bon et ça chasse les limaces !" continue-t-il avant de s\'endormir dans un rot ravageur. Vous continuez votre route.',
     picture: '../assets/fond-rencontre.png',
     encounter: '10',
     bonusObject: {description: 'Bière', image:'', bonusPower:['strength', 1]},
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['19'],
     previousScene: '6',
     audioText: 'assets/audio/scene09.mp3',
     progressionIndex: 20
   },
   {
     _id: '10',
     title: 'Les rails',
     // tslint:disable-next-line: max-line-length
     description: 'Les rats sont nombreux et un seul d\'entre eux pourrait briser votre coquille entre ses redoutables incisives. Vous prenez la direction du chemin de fer, vous glissez sans peine sur les rails.Vous sentez une vibration de plus en plus insistante. Un train arrive !!! Aussi vite que vous le pouvez, vous descendez du rail sur lequel vous faisiez votre route. Pas assez vite cependant pour éviter complètement la roue du train qui vous projette à des dizaines de mètres de là.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['16'],
     previousScene: '7',
     audioText: 'assets/audio/scene10.mp3',
     progressionIndex: 16
   },
   {
     _id: '11',
     title: 'Gang des rats',
     // tslint:disable-next-line: max-line-length
     description: 'Ils ne sont pas vraiment rassurants, mais vous décidez d\'affronter votre destinée. L\'un d\'entre eux, qui a l\'air plus costaud que les autres, s\'avance vers vous. -"Qu\'est-ce que tu viens faire ici ? microbe." -"Je...je suis en route vers le champ des salades" répondez-vous d\'une voix tremblante. -"Passe par un autre chemin, par ici ça va pas le faire". Deux solutions: Forcer le passage, en passant par la droite ou écouter ce gros rat menaçant en allant à gauche.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['12', '13'],
     previousScene: '7',
     audioText: 'assets/audio/scene11.mp3',
     progressionIndex: 16
   },
   {
     _id: '12',
     title: 'Darwin Awards',
     // tslint:disable-next-line: max-line-length
     description: 'Cela ne prend que quelques secondes avant que votre coquille ne tombe en morceaux par terre, les rats n\'ont pas l\'intention de vous manger, mais de s\'amuser à rat-escargot, leur sport préféré. Malgré vous vous allez participer, mais en tant que ballon et vous n\'en sortirez certainement pas vivant…',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['23'],
     previousScene: '11',
     audioText: 'assets/audio/scene12.mp3',
     progressionIndex: 100
   },
   {
     _id: '13',
     title: 'Piège à rat',
     // tslint:disable-next-line: max-line-length
     description: 'Vous obéissez , et vous empruntez un autre chemin.Vous rejoignez péniblement l\'entrée de la maison.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['8'],
     previousScene: '11',
     audioText: 'assets/audio/scene13.mp3',
     progressionIndex: 17
   },
   {
     _id: '14',
     title: 'Yvan l’habitant',
     // tslint:disable-next-line: max-line-length
     description: 'Vous commencez à traverser la cour. Aride, grise avec en prime un sol en bitume. Quand soudain apparait un humain! Il arrive à grand pas devant vous. Il vous faut l\'éviter à tout prix. A vous de jouer : Si vous décidez de vous arrêter en espérant qu\'il vous évitera : c\'est par la droite. Si vous décidez de tenter d\'éviter à tout prix ces pieds menaçants c\'est à gauche. Ou prenez tout droit en tentant de calculer votre trajectoire pour éviter l\'écrabouillement.',
     picture: '../assets/fond-rencontre.png',
     encounter: '13',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['15', '17', '18'],
     previousScene: '8',
     audioText: 'assets/audio/scene14.mp3',
     progressionIndex: 25
   },
   {
     _id: '15',
     title: 'Scritch l\'escargot',
     // tslint:disable-next-line: max-line-length
     description: 'Ecrasé!!! Il vous a écrasé! C\'est la Fin',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['23'],
     previousScene: '14',
     audioText: 'assets/audio/scene15.mp3',
     progressionIndex: 100
   },
   {
     _id: '16',
     title: 'Le marais',
     // tslint:disable-next-line: max-line-length
     description: 'Boum! Vous avez atterri dans un jardin. Vous réalisez en vous rétablissant que c\'est humide. Un crapaud vous regarde l\'air amusé \n - " Qui êtes-vous ?" vous demande-t-il en se dirigeant vers vous \n - " Un escargot " \n - " Vous êtes chez moi, l\'escargot ? Et vous allez partir !" \n - " Je n\'ai pas fait exprès d\'atterrir ici et je dois en sortir" \n - " Pas si vite, ça se mérite ! Un petit concours de bave avant de partir". \n JC le crapaud est bien sûr de lui... Vous envoyez le batracien se faire voir.',
     picture: '../assets/fond-rencontre.png',
     encounter: '10',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['20'],
     previousScene: null,
     audioText: 'assets/audio/scene16.mp3',
     progressionIndex: 20
   },
   {
     _id: '17',
     title: 'Badaboum',
     // tslint:disable-next-line: max-line-length
     description: 'C\'était moins une !!! L\'homme ne vous écrase pas, mais il tape votre carapace avec le bout de sa chaussure, le vol plané est interminable…',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['16'],
     previousScene: '14',
     audioText: 'assets/audio/scene17.mp3',
     progressionIndex: 22
   },
   {
     _id: '18',
     title: 'Évitement',
     // tslint:disable-next-line: max-line-length
     description: 'Bravo !!! quelle anticipation! Vous vous en tirez avec brio, et franchissez la maison et sa cour sans autre encombre. Vous sortez et continuez votre chemin.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['19'],
     previousScene: '14',
     audioText: 'assets/audio/scene18.mp3',
     progressionIndex: 30
   },
   {
     _id: '19',
     title: 'Titou le tatoo',
     // tslint:disable-next-line: max-line-length
     description: 'La faim vous tenaille. Vous avez une idée. Titou le tatou tient un petit camion à pizzas qui a la réputation de recharger les batteries. Le champ de salades est encore loin et vous avez besoin d\'énergie. Une fois arrivé,vous commandez une pizza avec un filet d\'huile piquante pour ramper plus vite. Vous sentez la force couler dans votre corps. Vous continuez à avancer après toutes ses aventures par là.',
     picture: '../assets/fond-rencontre.png',
     encounter: '11',
     bonusObject: null,
     bonusPower: ['force', 2],
     isBattle: false,
     battleWon: false,
     nextScenes: ['22'],
     previousScene: null,
     audioText: 'assets/audio/scene19.mp3',
     progressionIndex: 35
   },
   {
     _id: '20',
     title: 'JC le crapaud',
     // tslint:disable-next-line: max-line-length
     description: '- "Allez-vous faire voir avec vos concours débiles" vous exclamez-vous. Vous vous dirigez vers la sortie lorsqu\'un choc contre votre coquille vous fait vaciller puis tomber sur le côté. JC le crapaud est là, vert de rage. Le combat est inévitable.',
     picture: '../assets/fond-combat.png',
     encounter: '6',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '21'],
     previousScene: '16',
     audioText: 'assets/audio/scene20.mp3',
     progressionIndex: 30
   },
   {
     _id: '21',
     title: 'Après le crapaud',
     // tslint:disable-next-line: max-line-length
     description: 'Quel combat !!! Ce crapaud a bien failli vous faire rendre les armes. En attendant, la fête du potager vous attend toujours et il est temps de se remettre en route. Vous rassemblez vos esprits et prenez le petit chemin de campagne qui se trouve derrière le marais.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['22'],
     previousScene: '20',
     audioText: 'assets/audio/scene21.mp3',
     progressionIndex: 40
   },
   {
     _id: '22',
     title: 'Yoyo le bourricot',
     // tslint:disable-next-line: max-line-length
     description: 'Vous voilà à l\'orée d\'une forêt. Un peu de calme et d\'ombre vous feront le plus grand bien après toutes ces aventures. Un ane semble aussi trouver le coin idyllique. Méthodiquement employé à manger des carottes. Vous l\'accostez d\'un "Salut l\'âne" que vous espérez engageant \n - " Mouais salut le baveux" \n - " Je pourrais avoir une de ces jolies carottes ?" \n - " Tu peux toujours rêver. Maintenant dégage !" Vous n\'avez pas le choix, vous devez vous battre.',
     picture: '../assets/fond-combat.png',
     encounter: '1',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '25'],
     previousScene: '21',
     audioText: 'assets/audio/scene22.mp3',
     progressionIndex: 50
   },
   {
     _id: '23',
     title: 'Mort',
     // tslint:disable-next-line: max-line-length
     description: 'Vous gisez dans votre bave. Votre adversaire a eu raison de vous, il faut dire qu\'un petit escargot dans ce monde c\'est vraiment une victime. Vous avez lutté vaillamment et nul doute que votre histoire sera comptée lors des veillées des petits escargots comme "la tragique histoire de Dhareshsaw l\'escargot. Votre aventure s\'arrête ici.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: [],
     previousScene: null,
     audioText: 'assets/audio/scene23.mp3',
     progressionIndex: 100
   },
   {
     _id: '24', // DEVELOPPEMENT EN COURS...
     title: '',
     description: '',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: [],
     previousScene: null,
     audioText: null,
     progressionIndex: 0
   },
   {
     _id: '25',
     title: 'Paula le koala',
     // tslint:disable-next-line: max-line-length
     description: 'Vous avancez, fier de votre victoire face à cet immense bourricot!!! Vous passez le long d’une petite foret de bambous. Un koala se trouve là qui vous toise de ses grands yeux. Puis il dit: "Paola, pas Paula" en vous tendant une potion qui semble magique.',
     picture: '../assets/fond-rencontre.png',
     encounter: '9',
     bonusObject: {
        description: 'Potion de chance',
        image: '',
        bonusPower: ['luck', 2]
      },
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['26'],
     previousScene: '22',
     audioText: 'assets/audio/scene25.mp3',
     progressionIndex: 60
   },
   {
     _id: '26',
     title: 'Après le koala',
     // tslint:disable-next-line: max-line-length
     description: 'C\'est tout de même étrange de rencontrer un koala ici, pensez-vous. Le champ de salades est encore loin. A droite, il y a la route, dangereuse à cause des voitures mais praticable et le chemin le plus rapide. En suivant le ruisseau à gauche, vous pouvez arriver assez rapidement à bon port sans risque de vous perdre.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['27', '29'],
     previousScene: null,
     audioText: 'assets/audio/scene26.mp3',
     progressionIndex: 63
   },
   {
     _id: '27',
     title: 'La route',
     // tslint:disable-next-line: max-line-length
     description: 'Vous avez choisi la route. \n Il faut que vous récupèriez la clé du champ auprès d\'Annabelle la sauterelle ! \n Préparez-vous au combat !',
     picture: '../assets/fond-combat.png',
     encounter: '2',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '30'],
     previousScene: '26',
     audioText: 'assets/audio/scene27.mp3',
     progressionIndex: 66
     
   },
   {
     _id: '28',
     title: 'Mathias la limace',
     // tslint:disable-next-line: max-line-length
     description: 'Vous arrivez sur une petite clairière au bord du ruisseau. Un petit coin d\'eau se trouve là, juste ce qu\'il faut pour se ressourcer. Au moment de vous pencher pour boire vous entendez:"Qui vous a permis de venir boire dans MA clairière!!!" Une énorme limace fond vers vous et ça n\'est pas pour faire des bisous.',
     picture: '../assets/fond-combat.png',
     encounter: '7',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '31'],
     previousScene: '27',
     audioText: 'assets/audio/scene28.mp3',
     progressionIndex: 70
   },
   {
     _id: '29',
     title: 'Chassé',
     // tslint:disable-next-line: max-line-length
     description: 'Vous prenez le chemin du ruisseau. Le chemin est agréable, cependant régulièrement une ombre assombrit les alentours. Vous accélérez, conscient que de nombreux oiseaux raffolent des escargots. Soudain, un bec s\'enfonce juste à côté de vous ! La chasse a commencé. La seule solution c\'est de rentrer dans votre coquille et de rouler. Vous avez deux possibilités : rouler vers un épais buisson de framboise ou rouler vers la rivière.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['33', '34'],
     previousScene: '26',
     audioText: 'assets/audio/scene29.mp3',
     progressionIndex: 70     
   },
   {
     _id: '30',
     title: 'Élodie la pie',
     // tslint:disable-next-line: max-line-length
     description: 'Préparez-vous à livrer un combat épique face à Elodie la pie \n Elle fait beaucoup de bruit et vas vous casser les oreilles à vous désorienter.\n Bonne chance (taken)',
     picture: '../assets/fond-combat.png',
     encounter: '4',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '31'],
     previousScene: '27',
     audioText: 'assets/audio/scene30.mp3',
     progressionIndex: 70,
     key: true
   },
   {
     _id: '31',
     title: 'Anabelle la sauterelle',
     // tslint:disable-next-line: max-line-length
     description: 'Dhareshsaw l\'escargot voit un truc qui bouge au sol -> c\'est Anabelle la sauterelle qui agonise, elle a mangé trop de salade. Anabelle ne veut plus vivre cela et elle remet à Dhareshsaw la clé du champ de salade pour ne plus céder à la tentation.',
     picture: '../assets/fond-rencontre.png',
     encounter: '2',
     bonusObject: {
      description: 'Clé',
      image: '',
      bonusPower: [null, null]
    },
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['36'],
     previousScene: '28',
     audioText: 'assets/audio/scene31.mp3',
     progressionIndex: 80,
     key: true
   },
   {
     _id: '32',
     title: 'Bobo le corbeau',
     // tslint:disable-next-line: max-line-length
     description: 'Vous tentez de vous arrêter en tentant de faire la ventouse avec tout ce que vous touchez. Vous finissez par réussir à vous arrêter. C\'est là que le cri retentit, deux pattes griffues avancent vers vous. Le redoutable Bobo le corbeau vous fait face.',
     picture: '../assets/fond-combat.png',
     encounter: '3',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '36'],
     previousScene: '33',
     audioText: 'assets/audio/scene32.mp3',
     progressionIndex: 80
   },
   {
     _id: '33',
     title: 'Framboises',
     // tslint:disable-next-line: max-line-length
     description: 'Vous visez le buisson de framboises. Formidable, ça marche !!! Vous passez sous les ronces et entendez les cris de rage des oiseaux qui n\'ont pu faire de vous leur encas. Le terrain est en pente. Vous allez trop vite !!! Souhaitez-vous sortir de votre coquille pour ralentir votre course ou laisser le hasard décider?',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['32', '36'],
     previousScene: '29',
     audioText: 'assets/audio/scene33.mp3',
     progressionIndex: 75
   },
   {
     _id: '34',
     title: 'Noémie la fourmi',
     // tslint:disable-next-line: max-line-length
     description: 'Vers la rivière! Avec le courant, impossible que ces satanés volatiles vous attrapent. Par contre il va falloir ne pas se noyer. L\'eau rentre dans votre carapace. Vous priez quand tout à coup, tout s\'arrête. Vous sortez un œil, vous tombez œil à mandibules sur une fourmi rouge. \n - "Salut, moi c\'est Noémie, si tu veux aller au champ des salades, c\'est par là. Sinon j\'ai une potion qui augmente l\'endurance, tiens. Allez à un de ces jours." \n Et elle part sans demander son reste. Puis vous prenez la direction du champ de salade indiquée par la fourmi',
     picture: '../assets/fond-rencontre.png',
     encounter: '8',
     bonusObject: {
        description: 'Potion d\'endurance',
        image: '',
        bonusPower: ['endurance', 2]
      },
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['36'],
     previousScene: '29',
     audioText: 'assets/audio/scene34.mp3',
     progressionIndex: 80
   },
   {
     _id: '35',
     title: 'Le champ des héros',
     description: 'Vous tentez d\'ouvrir le portail, il ne bouge pas d\'un millimètre. Seule une clé permettrait de l\'ouvrir. Il vous faut donc partir à sa recherche. ',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['39'],
     previousScene: '36',
     audioText: 'assets/audio/scene35.mp3',
     progressionIndex: 75
   },
   {
     _id: '36',
     title: 'Pré du sanglier',
     description: 'Après toutes les épreuves traversées, vous arrivez devant un immense portail. Il est temps d\'entrer ',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['35', '37'],
     previousScene: null, //les scènes 34, 32 et 31 mènent ici
     audioText: 'assets/audio/scene36.mp3',
     progressionIndex: 85
   },
   {
     _id: '37',
     title: 'La clé qu\'Anabelle vous a donné marche parfaitement. Le portail s\'ouvre et vous laisse nez à nez avec un énorme et musculeux sanglier. Il grogne "Moi vivant, pas un escargot ne mangera de ces salades." Vaincre ou périr sont vos deux options.',
     description: 'Si victoire : ici',
     picture: '../assets/fond-combat.png',
     encounter: '5',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '38'],
     previousScene: '36',
     audioText: 'assets/audio/scene37.mp3',
     progressionIndex: 90
   },
   {
     _id: '38',
     title: 'Après ce combat miraculeusement remporté, vous avancez dans le champ et vous vous prélassez dans un paradis de légumes infini. BRAVO! C\'est la victoire!',
     description: '',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: [],
     previousScene: '37',
     audioText: 'assets/audio/scene38.mp3',
     progressionIndex: 100
   },
   {
    _id: '39',
    title: 'Retour vers le futur',
    description: 'Vous partez donc à la recherche de la clé. A la croisée des chemins vous devez faire un choix: à droite pour la route, à gauche pour le ruisseau.',
    picture: '../assets/fond-rencontre.png',
    encounter: null,
    bonusObject: null,
    bonusPower: [null, null],
    isBattle: false,
    battleWon: false,
    nextScenes: ['27', '29'],
    previousScene: '35',
    audioText: 'assets/audio/scene39.mp3',
    progressionIndex: 63
  },
 ];
