import { isPlatformServer } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';
import {
  makeStateKey,
  TransferState,
} from '@angular/platform-browser';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import {
  Observable,
  of,
} from 'rxjs';
import { tap } from 'rxjs/operators';

import { TeamsService } from '../services/teams.service';
import { TeamInterface } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<TeamInterface> {
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private readonly teamsService: TeamsService,
    private readonly transferState: TransferState,
  ) {
  }

  /**
   * Route resolver function
   *
   * @param route variable
   * @param state variable
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeamInterface> {
    const clubId = route.params.id;
    const TEAM_KEY = makeStateKey<TeamInterface>(`team-${clubId}`);

    if (this.transferState.hasKey(TEAM_KEY)) {
      const team = this.transferState.get<TeamInterface>(TEAM_KEY, undefined);

      this.transferState.remove(TEAM_KEY);

      return of(team);
    }
    else {
      return this.teamsService.getTeamById(clubId)
        .pipe(
          tap(team => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(TEAM_KEY, team);
            }
          }),
        );
      }
    }
  }
