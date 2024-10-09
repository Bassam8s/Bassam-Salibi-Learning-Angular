import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {PlayerListComponent} from "./player-list/player-list.component";
import {PlayerListItemsComponent} from "./player-list-items/player-list-items.component";
import {Player} from "./Shared/Models/Player";
import {PlayerService} from "./Service/player.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, PlayerListComponent, PlayerListItemsComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'BassamSalibiLearningAngular';
  player: Player | undefined;
  constructor(private playerService: PlayerService) {
    // This constructor is used for injection
  }
  ngOnInit() {
    // fetch and init our data
    this.playerService.getPlayerById(1).subscribe({
      next: (data: Player | undefined ) => this.player  = data,
      error: err => console.error("Error fetching an ID", err),
      complete:() => console.log("Student data fetch complete!")
    });
  }
}


