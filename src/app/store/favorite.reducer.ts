import { createReducer, on } from '@ngrx/store';
import { setFavouritePokemon } from './favorite.actions';
import { clearFavouritePokemon } from './favorite.actions';

export const initialFavouritePokemonState: any = null;

export const favouritePokemonReducer = createReducer(
  initialFavouritePokemonState,
  on(setFavouritePokemon, (state, { pokemon }) => pokemon),
  on(clearFavouritePokemon, state => null)
);
