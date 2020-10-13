import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalLanguagesPage } from './modal-languages.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLanguagesPageRoutingModule {}
