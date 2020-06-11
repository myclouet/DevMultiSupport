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
    path: 'object-inventory',
    loadChildren: () => import('./object-inventory-modal/object-inventory-modal.module').then( m => m.ObjectInventoryModalPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {

    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },

  {
    path: 'object-inventory-modal',
    loadChildren: () => import('./object-inventory-modal/object-inventory-modal.module').then( m => m.ObjectInventoryModalPageModule)
  },

];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
