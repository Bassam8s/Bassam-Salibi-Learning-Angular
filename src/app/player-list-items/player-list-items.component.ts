import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../Shared/Models/Player";
import {NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerService} from "../Service/player.service";


@Component({
  selector: 'app-player-list-items',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './player-list-items.component.html',
  styleUrl: './player-list-items.component.css'
})
export class PlayerListItemsComponent implements OnInit {
  @Input() players ?: Player;
  @Input() background ?: string ;

  playerList: Player[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playerServices: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerServices.getPlayers().subscribe(users => {
      this.playerList = users;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.playerList.findIndex(user => user.id === id);
          this.players = this.playerList[this.currentIndex];
        }
      });
    });
  }
}
