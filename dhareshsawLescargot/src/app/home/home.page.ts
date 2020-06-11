import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  splash = true;


  constructor(private router: Router) {
  }

  ngOnInit() {
      setTimeout(() => {
        this.splash = false;
      }, 4000);
    }

  newGame() {
    this.router.navigate(['/scene/1']);
  }

  savedGame() {

  }
}
