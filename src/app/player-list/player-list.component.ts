import { Component } from '@angular/core';
import {Player} from "../Shared/Models/Player";
import {PlayerListItemsComponent} from "../player-list-items/player-list-items.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    PlayerListItemsComponent,
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {
  PlayerList : Player[] = [];
}

