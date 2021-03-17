import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./views/league-clubs/league-clubs.module')
      .then(m => m.LeagueClubsModule)
    ,
    path: '',
  },
  {
    loadChildren: () => import('./views/clubs-players/clubs-players.module')
      .then(m => m.ClubsPlayersModule)
    ,
    path: 'club',
  },
  {
    loadChildren: () => import('./views/other/other.module')
      .then(m => m.OtherModule)
    ,
    path: 'other',
  },
  {
    path: '**',
    redirectTo: 'other/404-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
