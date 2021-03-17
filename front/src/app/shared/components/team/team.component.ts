import { Component, Input, OnInit } from '@angular/core';
import { TeamInterface } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  /* Team model to display*/
  @Input() team: TeamInterface;

  /* Team image Alt*/
  imageAlt: string;

  constructor() {}

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.imageAlt = `${this.team.name} image`;
  }

  /**
   * Function that handles the click event on the team logo
   */
  selectTeam(): void {
    window.open(`/club/${this.team._id}`, '_self');
  }
}
