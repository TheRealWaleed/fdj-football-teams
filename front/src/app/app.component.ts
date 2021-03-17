import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute, NavigationEnd,
  Router,
} from '@angular/router';

import { SeoService } from './core/services/seo.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TeamsService } from './core/services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly seoService: SeoService,
    private readonly teamsService: TeamsService,
  ) {
  }

  /**
   * Lifecycle hook
   */
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(data => {
        this.seoService.updateTitle(data.title);
        this.seoService.updateDescription(data.description);
        this.seoService.updateMetas(data.metas);
      })
    ;
  }

  /**
   * Function that handles the click event on the logo
   */
  navigateToHomePage(): void {
    this.teamsService.resetTeams();
    this.teamsService.resetSearch();
    this.router.navigate(['/']).then();
  }
}
