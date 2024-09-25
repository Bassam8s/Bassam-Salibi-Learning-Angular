import {Component, Input} from '@angular/core';
import {Player} from "../Models/Player";

@Component({
  selector: 'app-player-list-items',
  standalone: true,
  imports: [],
  templateUrl: './player-list-items.component.html',
  styleUrl: './player-list-items.component.css'
})
export class PlayerListItemsComponent {
  @Input() players?: Player[];
}
