import { createAction, props } from '@ngrx/store';

export const setFavouritePokemon = createAction(
  '[Pokemon] Set Favourite',
  props<{ pokemon: any }>()
);
export const clearFavouritePokemon = createAction('[Pokemon] Clear Favourite');
