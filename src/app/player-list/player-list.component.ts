import { Component } from '@angular/core';
import {Player} from "../Models/Player";
import {PlayerListItemsComponent} from "../player-list-items/player-list-items.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    PlayerListItemsComponent,
    NgForOf
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {
  // Initializing an array with 6 instances of soccer players
  Player1: Player = {id: 1, firstName: 'Lionel', lastName: 'Messi', jerseyNumber: 10, isTeamLeader: true};
  Player2: Player = {id: 2, firstName: 'Cristiano', lastName: 'Ronaldo', jerseyNumber: 7, isTeamLeader: true};
  Player3: Player = {id: 3, firstName: 'Neymar', lastName: 'Junior', jerseyNumber: 10};
  Player4: Player = {id: 4, firstName: 'Kylian', lastName: 'Mbappé', jerseyNumber: 7};
  Player5: Player = {id: 5, firstName: 'Kevin', lastName: 'De Bruyne', jerseyNumber: 17 , isTeamLeader: false};
  Player6: Player = {id: 6, firstName: 'Robert', lastName: 'Lewandowski', jerseyNumber: 9};

  PlayerList: Player[] = [this.Player1, this.Player2, this.Player3, this.Player4, this.Player5, this.Player6];

}
