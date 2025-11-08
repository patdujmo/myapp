import { createFeatureSelector, createSelector } from '@ngrx/store';
import { favoritesAdapter, FavoritesState } from './favorites.state';

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

const { selectAll, selectEntities } = favoritesAdapter.getSelectors(selectFavoritesState);

export const selectAllFavorites = selectAll;

export const selectIsFavorite = (eventId: string) =>
  createSelector(selectEntities, (entites) => entites[eventId] ? true : false);

export const selectFavoritesLoading = createSelector(
  selectFavoritesState,
  (state) => state.loading
);

export const selectFavoritesError = createSelector(
  selectFavoritesState,
  (state) => state.error
);

export const selectFavoriteIds = createSelector(
  selectFavoritesState,
  (state) => state.ids
);
