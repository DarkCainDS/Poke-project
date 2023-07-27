import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/favorite.state';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-api';

  favouritePokemon$: Observable<any>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.favouritePokemon$ = this.store.select(state => state.favouritePokemon);
  }
  openDialog(pokemon: any) {
    this.dialog.open(PokemonDialogComponent, {
      data: {
        pokemon: pokemon
      }
    });
  }
  
}

