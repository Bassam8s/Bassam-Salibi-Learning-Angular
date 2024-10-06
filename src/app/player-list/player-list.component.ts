import {Component, OnInit} from '@angular/core';
import {Player} from "../Shared/Models/Player";
import {PlayerListItemsComponent} from "../player-list-items/player-list-items.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {PlayerService} from "../Service/player.service";

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
export class PlayerListComponent implements OnInit {
  // Placeholder for all player-list-items values
  displayedColumns: string[] = ['id' , 'firstName', 'jerseyNumber']
  PlayerList : Player[] = [];

  constructor(private playerService: PlayerService) {
    // This constructor is primarily used for injection
  }
  ngOnInit() {
    // fetch and init our data
    this.playerService.getPlayers().subscribe({
      next: (data: Player[]) => this.PlayerList = data,
      error: err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    });
  }
  selectedPlayer?: Player;
  selectePlayer(player: Player): void{
    this.selectedPlayer = player;
}
}
