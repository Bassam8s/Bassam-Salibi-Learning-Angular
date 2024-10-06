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
  // Creat : Add Player
  addPlayer(newPlayer: Player): Observable<Player[]>{
    this.players.push(newPlayer);
    return of(this.players)
  }

  // Update Player
  updatePlayer(updatedPlayer: Player): Observable<Player[]> {
    const index = this.players.findIndex(player => player.id === updatedPlayer.id);
    if (index !== -1) {
      this.players[index] = updatedPlayer;
    }
    return of(this.players);
  }

  // Delete : Remove a player by ID
  deletePlayer(playerId: number): Observable<Player[]> {
    this.players = this.players.filter(player => player.id !== playerId);
    return of(this.players);
  }
  getPlayerById(playerId: number): Observable<Player | undefined>  {
    const player = this.players.find(player => player.id === playerId);
    return of(player);
  }
}
