import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsPlayersComponent } from './clubs-players.component';
import { environment } from '../../../environments/environment';
import { TeamResolver } from '../../core/resolvers/team.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ClubsPlayersComponent,
    resolve: {
      team: TeamResolver,
    },
    data: {
      title: `${environment.seo.title} Football Clubs`,
      description: environment.seo.description,
      metas: {
        ...environment.seo.metas,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsPlayersRoutingModule { }
