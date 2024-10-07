import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PlayerListComponent} from "./app/player-list/player-list.component";
import {PlayerListItemsComponent} from "./app/player-list-items/player-list-items.component";

const routes: Routes = [
  {path: '', redirectTo: '/players', pathMatch: 'full'},
  {path: '/players', component: PlayerListComponent},
  {path: 'players/:playerId', component: PlayerListItemsComponent},
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("bootstrap successful"));
