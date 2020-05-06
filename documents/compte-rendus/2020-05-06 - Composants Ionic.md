## Projet Dhareshsaw l'escargot :snail: Compte-rendu

#### :date: 06/05/2020 :clock3: 13:30 :hourglass: 1:00

| Animateurs | Participants | Destinataires |
| --- | --- | --- |
| Johann | Boris <br/> Dhareshsaw <br/> Hervé <br/> Jean-Christophe <br/> Noémie <br/> Paula <br/> Raphaël <br/> Thierry <br/> Vanessa <br/> Yvan | Toute l'équipe |

### Ordre du jour :
:arrow_forward: Les composants Ionic

***
### Points marquants :
Se référer à la page des [composants](https://github.com/myclouet/DevMultiSupport/wiki/Composants-Ionic) pour en connaître la liste. 
Gestionnaires : Paula et Dhareshsaw ~~l'escargot~~

De préférence un seul composant pour regrouper les rencontres amicales et les combats. Le choix est laissé aux développeurs en fonction des
contraintes techniques.

***
### Décisions :
Un combat affiche les caractéristiques du héros mais pas de l'adversaire. En remplacement, on peut prévoir un code couleur 
du vert au rouge ou une valeur de 1 à 5 pour informer le joueur de la difficulté du combat. Cela peut l'aider à décider de l'utilisation
d'un objet ou à envisager la fuite.

Pas de composant "lancer de dé". Le lancer de dé est une méthode du héros, elle peut être appelée par un bouton sur le composant scène.
Rappel : un combat ne comprend qu'un seul lancer de dé (décision susceptible d'être revue si les développeurs ont le temps d'implémenter
des "tours" dans les combats.

Quand le joueur bat le boss de fin, il accède à la scène finale. Donc pas besoin d'une page modale pour afficher l'accomplissement de la
partie.

L'inventaire affiche également les caractéristiques du joueur, ce qui évite la multiplication des boutons sur le footer.

***

### To do :
:one: ajouter le tableau des **scènes suivantes** dans la classe Scene  
:two: ajouter un attribut **scène précédente** dans la classe Scene  
:three: modifier l'attribut isFight par **needsDice** dans la classe Scene  
:four: créer un booléen **battleWon** dans la classe Scene pour indiquer que l'adversaire a été vaincu, afin de permettre la restauration de l'histoire  
:five: modifier la scène d'Yvan pour préciser le besoin d'un lancer de dé  
:six: créer une tâche par composant dans le planning  
:seven: les binômes choisissent leur(s) composant(s)  

***
### Prochain point :
:date: 11/05/2020 :clock3: 08:30 :hourglass: 1:00
