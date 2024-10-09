import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PlayerListComponent} from "./app/player-list/player-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {PlayerListItemsComponent} from "./app/player-list-items/player-list-items.component";

const routes: Routes = [
  {path:'', redirectTo: '/players', pathMatch: 'full'},
  {path: 'players', component: PlayerListComponent},
  {path: 'players/:id', component: PlayerListItemsComponent},
  {path: 'modifyListItems', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log("bootstrap successful"));
