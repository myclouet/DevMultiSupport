import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combats',
  templateUrl: './combats.page.html',
  styleUrls: ['./combats.page.scss'],
})
export class CombatsPage implements OnInit {

  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------


  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------

  constructor() { }

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------

  ngOnInit() {
    this.fightRandom();
  }

  fightRandom() {
    var result = Math.floor(Math.random() * 2);

    switch (result) {
      case 0:
        console.log("Automatic Fight");
        break;

      case 1:
        console.log("Conditional Fight");
        break;
    }
  }
}
