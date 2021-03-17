import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueClubsComponent } from './league-clubs.component';
import { environment } from '../../../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: LeagueClubsComponent,
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
export class LeagueClubsRoutingModule { }
