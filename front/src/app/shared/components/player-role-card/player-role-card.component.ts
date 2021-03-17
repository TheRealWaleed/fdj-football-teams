import {
  Component,
  Input, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-player-role-card',
  templateUrl: './player-role-card.component.html',
  styleUrls: ['./player-role-card.component.scss']
})
export class PlayerRoleCardComponent implements OnInit{
  /* Play role*/
  @Input() color: string;

  /* Play role*/
  @Input() role: string;

  /* Stat value*/
  @Input() value: number;

  /* SVG icon*/
  icon = '';

  constructor() { }

  /**
   * Lifecycle hook
   */
  ngOnInit(): void {
    this.icon = `./assets/icons/${this.role}.svg`;
  }
}
