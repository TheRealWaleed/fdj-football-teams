import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamsService } from '../../../core/services/teams.service';
import { TeamInterface } from '../../interfaces';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  /* Query to fetch */
  searchQuery = '';

  /* Subscription handler */
  subscription: Subscription;

  constructor(
    private readonly teamsService: TeamsService,
    private readonly router: Router,
  ) { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.teamsService.getSearch().subscribe(res => this.searchQuery = res );
  }

  /**
   * Function that deletes the search query
   */
  deleteSearch(): void {
    this.searchQuery = '';
    this.teamsService.resetTeams();
    this.teamsService.resetSearch();
  }

  /**
   * Function that search the query
   */
  search(): void {
    this.fetchForQuery(true);
  }

  /**
   * Function that fire http calls for fetching
   *
   * @param redirect: boolean
   */
  fetchForQuery(redirect = false): void {
    this.teamsService.setSearch(this.searchQuery);

    if (this.searchQuery.length > 2) {
      this.subscription = this.teamsService.searchLeague(this.searchQuery)
        .pipe(
          catchError(_ => {
            this.teamsService.setTeams([]);
            return of(undefined);
          })
        )
        .subscribe((teams: any) => {
          this.teamsService.setTeams(teams);
          this.router.navigate(['/']).then();
        })
      ;
    }

    if (this.searchQuery.length === 0) {
      this.deleteSearch();
    }
  }

  /**
   * Lifecycle method
   */
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
