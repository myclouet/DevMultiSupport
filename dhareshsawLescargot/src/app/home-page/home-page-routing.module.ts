import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagePage } from './home-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePagePageRoutingModule {}
