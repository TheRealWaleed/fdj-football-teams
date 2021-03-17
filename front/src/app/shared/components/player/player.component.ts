import { Component, Input, OnInit } from '@angular/core';
import { PlayerInterface } from '../../interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  /* Player model */
  @Input() player: PlayerInterface;

  /* Thumbnail image alt*/
  thumbnailAlt: string;

  constructor() { }

  /**
   * Lifecycle method
   */
  ngOnInit(): void {
    this.thumbnailAlt = `${this.player.firstName} ${this.player.lastName} photo`;
  }
}
