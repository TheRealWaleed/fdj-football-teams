import { Component, OnInit } from '@angular/core';
import { LeagueInterface, TeamInterface } from '../../shared/interfaces';
import { TeamsService } from '../../core/services/teams.service';

@Component({
  selector: 'app-league-clubs',
  templateUrl: './league-clubs.component.html',
  styleUrls: ['./league-clubs.component.scss']
})
export class LeagueClubsComponent implements OnInit {
  /** Searched League  */
  league: LeagueInterface;

  /* Not found message */
  notFoundMessage = '';

  /* Team selected */
  teams: TeamInterface[] = [];

  /** search value */
  search: string;

  constructor(
    private readonly  teamsServices: TeamsService
  ) { }

  ngOnInit(): void {
    this.teamsServices.getTeams().subscribe(teams => {
      this.teams = teams;

      if (this.teams && this.teams.length) {
        this.league = this.teams[0].league;
        this.notFoundMessage = '';
      } else {
        this.league = undefined;
      }
    });
    this.teamsServices.getSearch().subscribe(res => {
      this.search = res;

      if (this.search.length > 3   && !this.teams) {
        this.notFoundMessage = 'League not found 😩!';
        this.league = undefined;
      }

      if (this.search.length === 0 ) {
        this.notFoundMessage = '';
      }
    });
  }

}
