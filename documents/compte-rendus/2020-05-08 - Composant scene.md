## Projet Dhareshsaw l'escargot :snail: Compte-rendu

#### :date: 08/05/2020 :clock3: 16:00 :hourglass: 0:40

| Animateurs | Participants | Destinataires |
| --- | --- | --- |
| Johann | Hervé, Jean-Christophe | Toute l'équipe |

### Ordre du jour :
:arrow_forward: Fait-on 1 page **rencontre** + 1 page **combat** ou fusionne-t-on les 2 dans une unique page **scène** ?  

***
### Points marquants :
* Il y a plus de points communs que de différences entre ces 2 composants d'où l'intérêt de factoriser.
* Hervé et JC ont déjà commencé le dev. Ils proposent que le type de combat soit déterminé aléatoirement. Cela implique que l'on ne peut 
pas décider à l'avance qu'une scène aura besoin d'un lancer de dé.
* Une rencontre affiche un texte descriptif, un avatar de personnage rencontré et des boutons de direction.
* Un combat affiche un texte descriptif, un bouton pour lancer le combat, un bouton pour fuir et un éventuel bouton pour lancer le dé.
En cas de victoire, une page modale pour informer le joueur apparaît. Après acquitement, elle disparaît. On revient sur la scène de combat
et on affiche les boutons de direction.
* Hervé et JC vont avoir besoin à court terme du service **characters**.

***
### Décisions :
Une seule page scene pour les rencontres et les combats. Les différences d'affichage HTML seront gérées par des *ngIf...else.  
Si lors du développemement un blocage technique empêchait ce mode de gestion des scènes, on reviendrait à l'idée initiale de 2 pages.

***

### To do :
:one: modifier le booléen needsDice en isBattle dans la classe Scene (fait par Johann 08/05)  
:two: modifier la scène d'Yvan : elle devient un combat (fait par Johann 08/05)  
:three: compléter les mockups  
:four: @Hervé et JC : renommer la page Ionic et la branche Git "combat" en "scene" (git branch -m _feat_scenePage_)

***
### Prochain point :
:date: 11/05/2020 :clock3: 08:30 :hourglass: 1:00
