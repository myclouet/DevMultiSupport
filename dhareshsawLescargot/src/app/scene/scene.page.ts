import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.page.html',
  styleUrls: ['./scene.page.scss'],
})
export class ScenePage implements OnInit {

  constructor() { }

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
