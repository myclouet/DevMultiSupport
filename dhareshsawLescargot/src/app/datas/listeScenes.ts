import { Scene } from '../classes/scene';

export const SCENES: Scene[] = [
   {
     _id: '1',
     title: 'Prologue',
     // tslint:disable-next-line: max-line-length
     description: 'Jeune escargot atteignant juste l’âge de \"partir chercher les salades\", vous vous prénommez Dhareshsaw. Vous habitez encore la maison familiale, enfouie sous un grand et vieux chêne. Vos parents sont aimants, votre foyer douillet et sur, cependant, un petit je ne sais quoi dans l\'air du dehors fait frétiller vos antennes. Dans 10 jours, c\'est la fête du potager, et les jeunes escargots se sont tous donnés rendez-vous au champ des salades. Cet évènement marque le début de l\’âge adulte pour les escargots. Vous sortez un œil de votre trou et l\'appel étant irrésistible, vous sortez.',
     picture: '../assets/fond-rencontre.png',
     encounter: '0',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['2'],
     previousScene: null,
     progressionIndex: 0
   },
   {
     _id: '2',
     title: 'Introduction',
     // tslint:disable-next-line: max-line-length
     description: 'Vous vous déplacez tranquillement, lentement au bord du chemin par un temps ensoleillé. \n Vous êtes un jeune gastéropode et vous vous réjouissez. Une belle journée s’annonce. Tout est pour le mieux vous dites-vous. Un temps magnifique pour une journée que vous souhaitez fort agréable. Vous avez rendez-vous. Plusieurs de vos amis vous ont convié à la fête. Légumes à gogo, salade, chicorée, batavia, et tant d’autres. Ils ont tout prévu pour un repas vert gargantuesque. Végan, c’est votre credo mais veggie avec des amis, c’est votre gimmick. Vous savez que vous avez un long chemin à parcourir pour atteindre ce champ rêvé. Semé d’embûches ? Sans doute mais vous avez promis. C’est parti.',
     picture: '../../assets/fond-rencontre.png',
     encounter: '0',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['3'],
     previousScene: '1',
     progressionIndex: 5
   },
   {
     _id: '3',
     title: 'Vanessa le chat',
     // tslint:disable-next-line: max-line-length
     description: 'Vous êtes en pleine progression lorsque le ciel s\'assombrit. Une immense masse vous masque l’horizon. Gigantesque, poilue, vous n\'en voyez tout d’abord que les pattes griffues. Félines. Un chat. Votre première rencontre et vous tombez sur un chat. \n - « Bonjour, La limace ! » \n- « Je suis un escargot en fait » \n- « C’est pareil la spirale en plus. Sauf que toi on te mange ! » \n - « Oui, enfin pas tous » \n - « Je n’aime pas trop mais je peux me laisser tenter ce matin » \n La discussion est assez désagréable et le jeu est serré, il vous faut trouver de quoi occuper ce chat. Si vous souhaitez lui donner le trou d\'une famille de souris que vous avez repéré plus tôt, c\'est par la droite. Si vous souhaitez le convaincre de ne pas vous manger grâce à votre rhétorique baveuse, c\'est par la gauche. Enfin, si vous souhaitez attirer l\'attention d\'un lama...quoi ? un lama ??!! Oui, oui c\'est bien un lama qui broute nonchalamment de l\'herbe à 2 mètres de vous. Allez tout droit.',
     picture: '../../assets/fond-rencontre.png',
     encounter: '12',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['4', '5', '6'],
     previousScene: '2',
     progressionIndex: 10
   },
   {
     _id: '4',
     title: 'La balance',
     // tslint:disable-next-line: max-line-length
     description: '« On peut faire un marché ? » glapissez-vous \n - « Quel genre ? » \n - « Si je t’explique où se trouve un beau trou de souris avec toute la famille dedans ? » « Combien de souris ? »\n - « Trois et peut-être des mini Mickey » « Marché conclu »> Le chat à l’air de se la jouer gros matou. En échange de l’adresse de la famille de rongeurs, vous obtenez trois points d’endurance et vous déguerpissez avant qu\'il change d\'avis.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['7'],
     previousScene: '3',
     progressionIndex: 12
   },
   {
     _id: '5',
     title: 'Escarghauer',
     // tslint:disable-next-line: max-line-length
     description: 'Vos cours de rhétorique vous reviennent en tête. Votre professeur, monsieur Escarghauer, vous avait fait débattre avec vos camarades, et vous avait fait toucher du doigt l\'art d\'avoir toujours raison. C\'est ainsi que vous embrouillez Vanessa à tel point qu\'elle finit par partir en ne voulant plus entendre parler de vous. La voie est libre et vous apercevez devant vous une maison qui semble être le bon chemin pour aller droit vers le champ des salades.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['3'],
     previousScene: '3',
     progressionIndex: 14
   },
   {
     _id: '6',
     title: 'L\'aide de Rapha',
     // tslint:disable-next-line: max-line-length
     description: 'Vous criez de toutes vos forces pour appeler à l\'aide, c\'est à dire que vous ne faites quasiment aucun bruit. Mais contre toute attente, le lama toujours aussi nonchalant tourne la tête vers le chat avec un air agacé. Le chat lui est agacé par votre comportement commence à faire le dos rond hérisse son poil. Ça ne fait pas un pli, le lama envoie un crachat si puissant et si fourni qu\'il balaye le chat et divise par deux son volume, tout mouillé qu\'il est par la bave du ruminant.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['9'],
     previousScene: '3',
     progressionIndex: 15
   },
   {
     _id: '7',
     title: 'Honte sur vous',
     // tslint:disable-next-line: max-line-length
     description: 'Vous continuez votre route et vous ne savez pas pourquoi, vous vous sentez observé. Vous sentez des milliers de petits yeux vous scruter depuis leur cachette. Des yeux de souris, de rats, de mulots...vous avez du remords, mais c\'est trop tard, le massacre dont vous êtes à l\'origine vous suivra jusque dans votre dernière coquille. En attendant une bande de rats s\'est regroupée devant vous, à environ 4 mètres. Les ennuis sérieux commencent. Si vous décidez de prendre votre courage à deux antennes, et d\'aller au-devant du gang de rats, allez tout droit. À droite il y a une maison que vous pouvez utiliser pour vous cacher de ces maudits rongeurs. À gauche il y a un chemin de fer, mais les trains qui y passent pourraient vous broyer en moins de temps qu\'il n\'en faut pour se recroqueviller dans sa coquille',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['8', '10', '11'],
     previousScene: '4',
     progressionIndex: 14
   },
   {
     _id: '8',
     title: 'Maison',
     // tslint:disable-next-line: max-line-length
     description: 'La maison semble entretenue, il y a donc quelqu\'un qui habite ici. Une odeur de vieille huile et des pièces de mécanique trainent çà et là. Un poster paradisiaque trône sur un mur, représentant de belles plages, on peut y lire "partez pour la THAILANDE". Sans encombre, vous arrivez sur le pas de la porte. Vous vous trouvez devant une cour et il va falloir la traverser pour continuer votre voyage.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['14'],
     previousScene: null,
     progressionIndex: 18
   },
   {
     _id: '9',
     title: 'Rapha le lama',
     // tslint:disable-next-line: max-line-length
     description: 'Vous vous retournez vers lui, des larmes dans les yeux...Lui vous répond toujours aussi nonchalant : -"Salut, moi c\'est Rapha". -"Moi c\'est Dhareshsaw" répondez-vous. -"Allez on trinque" dit-il en vous tendant une canette de bière. "C\'est de la bonne, en plus ça chasse les limaces !" continue-t-il avant de s\'endormir dans un rot ravageur. Vous continuez votre route avec une canette en plus, tout chamboulé par les évènements.',
     picture: '../assets/fond-rencontre.png',
     encounter: '10',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['19'],
     previousScene: '6',
     progressionIndex: 20
   },
   {
     _id: '10',
     title: 'Les rails',
     // tslint:disable-next-line: max-line-length
     description: 'Les rats sont nombreux et un seul d\'entre eux pourrait briser votre coquille entre ses incisives redoutables. Vous prenez la direction du chemin de fer, l\'acier n\'est pas encore chaud, et vous glissez sans peine dessus, le voyage est si facile que vous vous surprenez à rêver au champ de salades. Vous êtes brutalement sorti de votre torpeur par une vibration qui se fait de plus en plus insistante. Un train arrive !!! Aussi vite que vous le pouvez, c\'est à dire très...trop lentement vous descendez du rail sur lequel vous faisiez votre route. Pas assez vite cependant pour éviter complètement la roue du train qui vous projette à des dizaines de mètres de là.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['16'],
     previousScene: '7',
     progressionIndex: 16
   },
   {
     _id: '11',
     title: 'Gang des rats',
     // tslint:disable-next-line: max-line-length
     description: 'Ils ne sont pas vraiment rassurants, mais vous décidez d\'affronter votre destinée. Les rats se dressent devant vous, le poil hirsutes, l\'air brutal avec leurs cicatrices et leurs oreilles trouées. L\'un d\'entre eux, qui a l\'air plus costaud que les autres et dont un œil est caché par un bandeau noir, s\'avance vers vous. -"Qu\'est-ce que tu viens faire ici ? microbe." -"Je...je suis en route vers le champ des salades" répondez-vous d\'une voix tremblante. -"Passe par un autre chemin, par ici tu vas tout saloper avec ta bave". Il vous reste deux solutions maintenant que vous êtes là...Forcer le passage, en passant par la droite ou écouter ce gros rat menaçant en allant à gauche.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['12', '13'],
     previousScene: '7',
     progressionIndex: 16
   },
   {
     _id: '12',
     title: 'Darwin Awards',
     // tslint:disable-next-line: max-line-length
     description: 'Cela ne prend que quelques secondes avant que votre coquille ne tombe en morceaux par terre, les rats n\'ont pas l\'intention de vous manger, mais de s\'amuser à rat-escargot, le sport préféré de ces imbéciles de rongeurs. Malgré vous vous allez participer, mais en tant que ballon et vous n\'en sortirez certainement pas vivant…',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['23'],
     previousScene: '11',
     progressionIndex: 100
   },
   {
     _id: '13',
     title: 'Piège à rat',
     // tslint:disable-next-line: max-line-length
     description: 'Vous obéissez au borgne, et vous empruntez un autre chemin, vous avez bien fait un mètre en direction de la maison lorsque vous entendez : "RAT-SCARGOT RAT-SCARGOT". Ce sont les rats qui, excités par votre lenteur à rejoindre la maison, ont décidé de jouer avec vous. Vous entendez les dizaines de pattes griffues racler le sol en se rapprochant de vous très rapidement. Vous sentez la première griffe sur votre coquille lorsqu\'elle apparait, faisant détaler tous les rats dans tous les trous possibles et imaginables. C\'est Vanessa, qui ayant bien mangé, s\'est dit que cela valait le coup de garder vivant un informateur tel que vous. Elle vous regarde rejoindre péniblement l\'entrée de la maison.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['8'],
     previousScene: '11',
     progressionIndex: 17
   },
   {
     _id: '14',
     title: 'Yvan l’habitant',
     // tslint:disable-next-line: max-line-length
     description: 'Vous commencez à traverser la cour. Jolie pour les humains mais pour vous c\'est relativement aride. Aride, gris avec en prime sol en bitume. En parlant des humains, en voilà un ! Pourquoi sont-ils si grands et si rapides ! Il arrive à grand pas devant vous. Il vous faut l\'éviter à tout prix. A vous de jouer : Si vous décidez de vous arrêter en espérant qu\'il vous évitera : c\'est par la droite. Si vous décidez de tenter d\'éviter à tout prix ces pieds menaçants c\'est à gauche. Prenez tout droit en gardant les yeux grands ouverts et en tentant de calculer votre trajectoire pour éviter l\'écrabouillement.',
     picture: '../assets/fond-rencontre.png',
     encounter: '13',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['15', '17', '18'],
     previousScene: '8',
     progressionIndex: 25
   },
   {
     _id: '15',
     title: 'Scritch l\'escargot',
     // tslint:disable-next-line: max-line-length
     description: 'Connaissez-vous l\'histoire de scritch l\'escargot...et bien c\'est la même que Dhareshsaw. Fin',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['23'],
     previousScene: '14',
     progressionIndex: 100
   },
   {
     _id: '16',
     title: 'Le marais',
     // tslint:disable-next-line: max-line-length
     description: 'Boum ! Vlan ! Vous avez atterri dans un jardin, le nez dans une iris face à un champ de prêles. Après avoir éternué pour vous débarrassez de tous les résidus végétaux, vous réalisez que c\'est humide. Pas comme la bave que vous répandez mais comme un cloaque plein d\'animaux étranges. En voilà un. Il remue. Il est comment dire ? Gluant ? \n - " Qui êtes-vous ?" vous demande-t-il en se dirigeant vers vous \n - " Un escargot " \n - " Vous êtes chez moi, l\'escargot ? Et vous allez partir !" \n - " Je n\'ai pas fait exprès d\'atterrir ici et je dois en sortir" \n - " Pas si vite, ça se mérite ! Un petit concours de bave avant de partir". JC le crapaud est bien sûr de lui... Vous voulez envoyer le batracien se faire voir, par là.',
     picture: '../assets/fond-rencontre.png',
     encounter: '10',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['20'],
     previousScene: null,
     progressionIndex: 20
   },
   {
     _id: '17',
     title: 'Badaboum',
     // tslint:disable-next-line: max-line-length
     description: 'C\'était moins une !!! L\'homme ne vous écrase pas, mais il tape votre carapace avec le bout de sa chaussure, ce qui vous envoie loin, très loin, le vol plané est interminable…',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['16'],
     previousScene: '14',
     progressionIndex: 22
   },
   {
     _id: '18',
     title: 'Évitement',
     // tslint:disable-next-line: max-line-length
     description: 'Bravo !!! quelle anticipation, pour un escargot éviter un pied d\'homme, c\'est comme un poisson qui fait de la bicyclette !!! Vous vous en tirez avec brio, et franchissez la maison et sa cour sans autre encombre. Vous sortez et continuez votre chemin. Les alentours vous semblent familier et vous reconnaissez la route.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['19'],
     previousScene: '14',
     progressionIndex: 30
   },
   {
     _id: '19',
     title: 'Titou le tatoo',
     // tslint:disable-next-line: max-line-length
     description: 'La faim vous tenaille. Des images de plats commencent à défiler devant vos yeux. Vous avez une idée. Titou le tatou tient un petit camion à pizzas qui ont la réputation de recharger les batteries. Vous le connaissez bien et vous vous dites qu\'un petit détour vaudrait bien la peine. Le champ de salades est encore loin. Vous avez besoin d\'énergie car qui sait quels pièges vous allez encore rencontrer sur votre chemin ? Titou est là, fidèle au poste. Vous commandez une pizza Quatre-saisons bien garnie, avec un filet d\'huile piquante pour ramper plus vite. Vous gagnez de points de force Vous continuez à avancer après toutes ses aventures par là.',
     picture: '../assets/fond-rencontre.png',
     encounter: '11',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['22'],
     previousScene: null,
     progressionIndex: 35
   },
   {
     _id: '20',
     title: 'JC le crapaud',
     // tslint:disable-next-line: max-line-length
     description: '- "Allez-vous faire voir avec vos concours débiles" vous exclamez-vous avant de tourner la coquille au crapaud. Vous vous dirigez vers la sortie lorsqu\'un choc contre votre coquille vous fait vaciller puis tomber sur le côté. JC est là, vert de rage, la langue pendante se répétant "me refuser le concours de bave à moi !!!". Le combat est inévitable. \n Si vous perdez c\'est par là. \n Si vous gagnez c\'est par ici.',
     picture: '../assets/fond-combat.png',
     encounter: '6',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '21'],
     previousScene: '16',
     progressionIndex: 30
   },
   {
     _id: '21',
     title: 'Après le crapaud',
     // tslint:disable-next-line: max-line-length
     description: 'Quel combat !!! Ce crapaud a bien failli vous faire rendre les armes. En attendant, la fête du potager vous attend toujours et il est temps de se remettre en route. Vous rassemblez vos esprits et prenez le petit chemin de campagne qui se trouve derrière le marais. Suivant.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['22'],
     previousScene: '20',
     progressionIndex: 40
   },
   {
     _id: '22',
     title: 'Yoyo le bourricot',
     // tslint:disable-next-line: max-line-length
     description: 'Vous voilà à l\'orée d\'une forêt. Un peu de calme et d\'ombre vous feront le plus grand bien après toutes ces aventures. Un équidé semble aussi trouver le coin idyllique. Méthodiquement employé à manger des carottes dont la vue vous fait saliver. Vous décidez d\'engager la conversation. Vous l\'accostez d\'un "Salut l\'âne" dynamique et que vous espérez engageant " Mouais salut le baveux" " Je pourrais avoir une de ces jolies carottes ?" " Tu peux toujours rêver. Je n\'ai pas risqué ma vie en les volant pour les refourguer à un distributeur de glue ambulant " " Alors, dis-moi ou tu les as trouvées ? Que j\'aille voir s\'il en reste" " Je les ai dérobées sur le pas d\'une maison dans le village qu\'on aperçoit au loin. Tu seras mort avant d\'y arriver. Maintenant dégage !" Vous n\'avez pas le choix, vous devez vous battre.',
     picture: '../assets/fond-combat.png',
     encounter: '1',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '25'],
     previousScene: '21',
     progressionIndex: 50
   },
   {
     _id: '23',
     title: 'A changer',
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
     progressionIndex: 0
   },
   {
     _id: '25',
     title: 'Paula le koala',
     // tslint:disable-next-line: max-line-length
     description: 'Vous avancez, fier de votre victoire face à cet immense bourricot, quelle humiliation pour lui !!! Vous continuez votre chemin et passez le long d’un petit foret de bambous. Les gens de nos jours !!! Après le don de potion vous allez ici.',
     picture: '../assets/fond-rencontre.png',
     encounter: '9',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['26'],
     previousScene: '22',
     progressionIndex: 60
   },
   {
     _id: '26',
     title: 'Après le koala',
     // tslint:disable-next-line: max-line-length
     description: 'C\'est tout de même étrange de rencontrer un koala ici...mais elle était très sympa, pensez-vous en continuant votre route. Le champ de salades est encore relativement loin même si vous pensez avoir fait la moitié du chemin. A droite, il y a la route, dangereuse à cause des voitures mais praticable et le chemin le plus rapide vers le champ. En suivant le ruisseau à gauche, vous pouvez arriver assez rapidement à bon port mais les abords des ruisseaux grouillent de bêtes adorant les escargots, si vous souhaitez braver la chaine alimentaire',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['27', '29'],
     previousScene: null,
     progressionIndex: 63
   },
   {
     _id: '27',
     title: 'La route',
     // tslint:disable-next-line: max-line-length
     description: 'La route est encore longue et dangereuse, il semble qu\'elle soit semée d\'embuches, rien de rassurant à droite ici ou à gauche là. \n Il faut que tu récupères la clé du champ auprès d\'Annabelle la sauterelle ! \n Prépare-toi au combat !',
     picture: '../assets/fond-combat.png',
     encounter: '2',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['28', '30'],
     previousScene: '26',
     progressionIndex: 66
   },
   {
     _id: '28',
     title: 'Mathias la limace',
     // tslint:disable-next-line: max-line-length
     description: 'Dhareshsaw combat Mathias la limace qui refuse de le laisser partir sans payer parce qu\'il a utilisé sa partie de ruisseau \n Si victoire alors ici \n Si échec alors ici.',
     picture: '../assets/fond-combat.png',
     encounter: '7',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '31'],
     previousScene: '27',
     progressionIndex: 70
   },
   {
     _id: '29',
     title: 'Chassé',
     // tslint:disable-next-line: max-line-length
     description: 'Vous décidez donc de prendre le chemin en direction du ruisseau. Le chemin est agréable, frais et bucolique, cependant vous entendez au loin des cris d\'oiseau et de temps à autre, une ombre assombrit les alentours. Vous accélérez, conscient que de nombreux oiseaux raffolent des escargots, surtout jeunes comme vous. Soudain, alors que vous passez sous une branche morte, un bec s\'enfonce juste à côté de vous ! La chasse a commencé. La seule solution pour échapper aux oiseaux bien plus rapide que vous, c\'est de rentrer dans votre coquille et de rouler. Vous avez deux possibilités : rouler vers un épais buisson de framboise en prenant à droite ou rouler vers la rivière en prenant à gauche.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['33', '34'],
     previousScene: '26',
     progressionIndex: 70
   },
   {
     _id: '30',
     title: 'Élodie la pie',
     // tslint:disable-next-line: max-line-length
     description: 'Prépare-toi à livrer un combat épique face à Elodie la pie \n Elle fait beaucoup de bruit et vas te casser les oreilles et tu t\'éloigneras de ton chemin \n Bonne chance (taken) \n Si victoire alors ici \n Si échec alors ici',
     picture: '../assets/fond-combat.png',
     encounter: '4',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '31'],
     previousScene: '27',
     progressionIndex: 70
   },
   {
     _id: '31',
     title: 'Anabelle la sauterelle',
     // tslint:disable-next-line: max-line-length
     description: 'Dhareshsaw l\'escargot voit un truc qui bouge au sol -> c\'est Anabelle la sauterelle qui agonise, elle a mangé trop de salade. Anabelle ne veut plus vivre cela et elle remet à Dhareshsaw la clé du champ de salade pour ne plus céder à la tentation. \n Apres obtention de la clé : par ici.',
     picture: '../assets/fond-rencontre.png',
     encounter: '2',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['36'],
     previousScene: '28',
     progressionIndex: 80
   },
   {
     _id: '32',
     title: 'Bobo le corbeau',
     // tslint:disable-next-line: max-line-length
     description: 'Vous tentez de vous arrêter en tentant de faire la ventouse avec toutes les feuilles que vous pouvez croiser. Vous vous égratignez plus ou moins violemment sur quelques branches et deux ou trois cailloux, mais vous finissez par réussir à vous arrêter sur une vieille feuille de chêne, étourdi et hors d\'haleine. C\'est là que le cri retentit, deux pattes griffues avancent vers vous, il vous a suivi pendant tout votre trajet. Le redoutable Bobo le corbeau vous fait face et il va falloir se sortir de cette terrible situation. Ici. Si défaite ici.',
     picture: '../assets/fond-combat.png',
     encounter: '3',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['23', '36'],
     previousScene: '33',
     progressionIndex: 80
   },
   {
     _id: '33',
     title: 'Framboises',
     // tslint:disable-next-line: max-line-length
     description: 'Vous rentrez aussi vite que vous pouvez dans votre coquille et donnez un à-coup pour rouler vers le buisson. Formidable, ça marche !!! Vous passez sous les ronces et entendez les cris de rage des oiseaux qui n\'ont pu faire de vous leur encas. Le terrain est en pente, aucune ronce n\'entrave votre avancée. Vous allez trop vite !!! et traversez le buisson sans vous arrêter. Vous prenez encore de la vitesse et commencez à avoir peur de briser votre coquille. Souhaitez-vous sortir de votre coquille pour ralentir votre course en allant à droite ou laisser le hasard décider en prenant à gauche ?.',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['32', '36'],
     previousScene: '29',
     progressionIndex: 75
   },
   {
     _id: '34',
     title: 'Noémie la fourmi',
     // tslint:disable-next-line: max-line-length
     description: 'Ni une ni deux, vous roulez vers la rivière, avec le courant, impossible que ces satanés volatiles vous attrapent. Par contre il va falloir ne pas se noyer. L\'eau rentre dans votre carapace. Si vous tombez dans un endroit calme et profond de la rivière, c\'en est fini de votre aventure. Vous priez quand tout à coup, tout s\'arrête, votre carapace ne bouge plus, enfin presque plus, un mouvement se fait tout de même sentir mais lent et l\'eau est en train de s\'évacuer. Lorsque vous sortez un œil, vous tombez œil à mandibules sur une fourmi rouge. \n - "Salut, moi c\'est Noémie, si tu veux aller au champ des salades, c\'est par là, si tu souhaites te reposer y\'a une possibilité dans le refuge des insectes derrière moi. Sinon j\'ai une potion de miellat qui augmente l\'endurance, tiens. Allez à un de ces jours." \n Et elle part sans demander son reste. Vous restez là, la potion dans la main à vous demander ce qu\'il vient de se passer. Puis vous prenez la direction du champ de salade indiquée par la fourmi, par là.',
     picture: '../assets/fond-rencontre.png',
     encounter: '8',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['36'],
     previousScene: '29',
     progressionIndex: 80
   },
   { // A VERIFIER A PARTIR D'ICI CAR LES SCENES PAS ENCORE TERMINEES
     _id: '35',
     title: 'Le champ des héros',
     description: 'Ici',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['26'],
     previousScene: '36',
     progressionIndex: 75
   },
   {
     _id: '36',
     title: 'Pré du sanglier',
     description: 'Si clé alors par-là, si pas clé alors par ici',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: ['35', '37'],
     previousScene: null,
     progressionIndex: 85
   },
   {
     _id: '37',
     title: 'Hervé le sanglier',
     description: 'Si victoire : ici',
     picture: '../assets/fond-combat.png',
     encounter: '5',
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: true,
     battleWon: false,
     nextScenes: ['38'],
     previousScene: '36',
     progressionIndex: 90
   },
   {
     _id: '38',
     title: 'Champ de salade',
     description: '',
     picture: '../assets/fond-rencontre.png',
     encounter: null,
     bonusObject: null,
     bonusPower: [null, null],
     isBattle: false,
     battleWon: false,
     nextScenes: [],
     previousScene: '37',
     progressionIndex: 100
   },
 ];
