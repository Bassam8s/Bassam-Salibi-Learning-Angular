import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from "./Models/Player";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'BassamSalibiLearningAngular';
  // Initializing an array with 6 instances of soccer players
  players: Player[] = [
    {id: 1, firstName: 'Lionel', lastName: 'Messi', jerseyNumber: 10, isTeamLeader: true},
    {id: 2, firstName: 'Cristiano', lastName: 'Ronaldo', jerseyNumber: 7, isTeamLeader: true},
    {id: 3, firstName: 'Neymar', lastName: 'Junior', jerseyNumber: 10},
    {id: 4, firstName: 'Kylian', lastName: 'Mbappé', jerseyNumber: 7},
    {id: 5, firstName: 'Kevin', lastName: 'De Bruyne', jerseyNumber: 17 , isTeamLeader: false},
    {id: 6, firstName: 'Robert', lastName: 'Lewandowski', jerseyNumber: 9}
  ];

}


