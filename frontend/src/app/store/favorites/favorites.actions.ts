import { createAction, props } from '@ngrx/store';
import { EventData } from '../models/events';

export const loadFavorites = createAction('[Favorites] Load Favorites');

export const loadFavoritesSuccess = createAction(
  '[Favorites] Load Favorites Success',
  props<{ favorites: EventData[] }>()
);

export const loadFavoritesFailure = createAction(
  '[Favorites] Load Favorites Failure',
  props<{ error: any }>()
);

export const addFavorite = createAction(
  '[Favorites] Add Favorite',
  props<{ event: EventData }>()
);

export const addFavoriteSuccess = createAction(
  '[Favorites] Add Favorite Success',
  props<{ event: EventData }>()
);

export const addFavoriteFailure = createAction(
  '[Favorites] Add Favorite Failure',
  props<{ error: string }>()
);

export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ eventId: string }>()
);

export const removeFavoriteSuccess = createAction(
  '[Favorites] Remove Favorite Success',
  props<{ eventId: string }>()
);
export const removeFavoriteFailure = createAction(
  '[Favorites] Remove Favorite Failure',
  props<{ error: string }>()
);

export const clearFavorites = createAction('[Favorites] Clear Favorites');