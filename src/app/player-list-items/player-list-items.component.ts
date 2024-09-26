import {Component, Input} from '@angular/core';
import {Player} from "../Models/Player";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-player-list-items',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './player-list-items.component.html',
  styleUrl: './player-list-items.component.css'
})
export class PlayerListItemsComponent {
  @Input() players ?: Player;
  @Input() background ?: string ;
}
