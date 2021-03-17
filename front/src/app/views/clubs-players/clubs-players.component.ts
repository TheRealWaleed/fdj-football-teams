import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamInterface } from '../../shared/interfaces';
import { TeamsService } from '../../core/services/teams.service';

@Component({
  selector: 'app-clubs-players',
  templateUrl: './clubs-players.component.html',
  styleUrls: ['./clubs-players.component.scss']
})
export class ClubsPlayersComponent implements OnInit {
  /* Defenders number */
  defenders = 0;

  /* Midfielders number */
  midfielders = 0;

  /* Goalkeepers number */
  goalkeepers = 0;

  /* Team stat */
  stats = [
    {
      role: 'goalkeeper',
      value: 0,
      color: 'yellow',
    },
    {
      role: 'defender',
      value: 0,
      color: 'green',
    },
    {
      role: 'midfielder',
      value: 0,
      color: 'indigo',
    },
    {
      role: 'striker',
      value: 0,
      color: 'red',
    },
  ];

  /* Strikers number */
  strikers = 0;

  /* The team's players*/
  team: TeamInterface;

  /* Team market Value */
  teamMarketValue = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly teamsService: TeamsService,
  ) {}

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.team = this.activatedRoute.snapshot.data.team;
    this.teamsService.setSearch(this.team.league.name);

    this.team.players.forEach(player => {
      if (this.stats.find(e => e.role === player.role.toLocaleLowerCase()))
        this.stats.find(e => e.role === player.role.toLocaleLowerCase()).value ++;

      this.teamMarketValue += player.price.amount;
    });
  }
}
