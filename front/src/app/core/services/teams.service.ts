import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeamInterface } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  /* Api url */
  private apiUrl = environment.apiUrl;

  /** Initial teams  */
  private initialTeams: TeamInterface[] = null;

  /* Teams tracker */
  private teamsTracker = new BehaviorSubject<TeamInterface[]>(this.initialTeams);

  /** Initial teams  */
  private initialSearch = '';

  /* Teams tracker */
  private searchTracker = new BehaviorSubject<string>(this.initialSearch);

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  /**
   *  Allows subscription to the behavior subject as an observable
   */
  getTeams(): Observable<TeamInterface[]> {
    return this.teamsTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   *
   * @param teams an array representing the teams value
   */
  setTeams(teams: TeamInterface[]): void {
    this.teamsTracker.next(teams);
  }

  /**
   *  Resets the count to the initial value
   */
  resetTeams(): void {
    this.teamsTracker.next(this.initialTeams);
  }

  /**
   *  Allows subscription to the behavior subject as an observable
   */
  getSearch(): Observable<string> {
    return this.searchTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   *
   * @param search an array representing the teams value
   */
  setSearch(search: string): void {
    this.searchTracker.next(search);
  }

  /**
   *  Resets the count to the initial value
   */
  resetSearch(): void {
    this.searchTracker.next(this.initialSearch);
  }

  /**
   * Function that fetch team by id
   *
   * @param id of the selected team
   */
  getTeamById(id: string): Observable<TeamInterface> {
    return this.httpClient.get<TeamInterface>(`${this.apiUrl}/teams/${id}`);
  }

  /**
   * Function that fetch for leagues
   *
   * @param query typed by the user
   */
  searchLeague(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/teams?query=${query}`);
  }
}
