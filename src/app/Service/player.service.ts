// Create new Decorator
import {Injectable} from "@angular/core";
import {Player} from "../Shared/Models/Player";
import {PlayerList} from "../Shared/mockSPlayer.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = PlayerList;

  // New constructor
  constructor() {
  }

  // Read : Return all Players
  getPlayers(): Observable<Player[]> {
    return of(PlayerList); // Return and Observable
  }

  //Adding basic CRUD methods
}
