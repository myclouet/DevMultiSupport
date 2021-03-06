import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'scene/:id',
    loadChildren: () => import('./scene/scene.module').then( m => m.ScenePageModule)
  },

  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  /*{
    path: 'history-modal',
    loadChildren: () => import('./history-modal/history-modal.module').then( m => m.HistoryModalPageModule)
  },*/
  {
    path: 'modal-languages',
    loadChildren: () => import('./modal-languages/modal-languages.module').then( m => m.ModalLanguagesPageModule)
  },

  {
    path: 'win-loose-modal',
    loadChildren: () => import('./win-loose-modal/win-loose-modal.module').then( m => m.WinLooseModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

