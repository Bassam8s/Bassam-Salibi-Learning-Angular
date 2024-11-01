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
  deletePlayer(playerId: number): void {

    this.players.splice(playerId, playerId)
    this.players = this.players.filter(player => player.id !== playerId);

  }
  getPlayerById(playerId: number): Observable<Player | undefined>  {
    const player = this.players.find(player => player.id === playerId);
    return of(player);
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.players.length > 0 ? Math.max(...this.players.map(player => player.id)) + 1 : 1;
  }
}
