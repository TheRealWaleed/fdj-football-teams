import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsPlayersRoutingModule } from './clubs-players-routing.module';
import { ClubsPlayersComponent } from './clubs-players.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ClubsPlayersComponent],
  imports: [
    CommonModule,
    ClubsPlayersRoutingModule,
    SharedModule,
  ],
})
export class ClubsPlayersModule { }
