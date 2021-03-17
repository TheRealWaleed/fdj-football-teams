import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { FeatherModule } from 'angular-feather';
import { Search, XCircle, DollarSign } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';
import { PlayerRoleCardComponent } from './components/player-role-card/player-role-card.component';
import { SafePipe } from './pipes/safe.pipe';
import { TransferMarketPipe } from './pipes/transfer-market.pipe';

const icons = {
  Search,
  XCircle,
  DollarSign,
};

@NgModule({
  declarations: [SearchComponent, TeamComponent, PlayerComponent, PlayerRoleCardComponent, SafePipe, TransferMarketPipe],
  exports: [
    SearchComponent,
    FeatherModule,
    TeamComponent,
    PlayerComponent,
    PlayerRoleCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeatherModule.pick(icons),
  ],
})
export class SharedModule { }
