import { createReducer, on } from '@ngrx/store';
import { favoritesAdapter, initialFavoritesState } from './favorites.state';
import { addFavoriteSuccess, loadFavorites, loadFavoritesFailure, loadFavoritesSuccess, removeFavoriteSuccess } from './favorites.actions';

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(loadFavorites, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadFavoritesSuccess, (state, action) => 
    favoritesAdapter.setAll(action.favorites, {...state, loading: false })
  ),

  on(loadFavoritesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addFavoriteSuccess, (state, { event }) => 
    favoritesAdapter.upsertOne(event, state)
  ),
  on(removeFavoriteSuccess, (state, { eventId }) => {
    return favoritesAdapter.removeOne(eventId, state);
  }),
);
