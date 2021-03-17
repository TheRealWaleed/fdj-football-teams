import { PlayerInterface } from './player.interface';
import { LeagueInterface } from './league.interface';

export interface TeamInterface {
  _id: string;
  name: string;
  logo: string;
  league: LeagueInterface;
  players?: PlayerInterface[];
}
