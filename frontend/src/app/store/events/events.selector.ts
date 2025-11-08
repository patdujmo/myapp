import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventsAdapter, EventsState } from './events.state';
import { selectFavoriteIds } from '../favorites/favorites.selector';

export const selectEventsState = createFeatureSelector<EventsState>('events');

const { selectAll, selectEntities, selectTotal } = eventsAdapter.getSelectors(selectEventsState);

export const selectAllEvents = selectAll;

export const selectEventById = (id: string) =>
  createSelector(selectEntities, (entities) => entities[id] ?? null);

export const selectEventCount = selectTotal;

export const selectEventsLoading = createSelector(
  selectEventsState,
  (state) => state.loading
);

export const selectEventsError = createSelector(
  selectEventsState,
  (state) => state.error
);

export const selectEventsWithFavorites = createSelector(
  selectAllEvents,
  selectFavoriteIds,
  (events, favoritesIds) => {
    const ids = favoritesIds as string[];
    return events.map((eventNew) => ({
      ...eventNew,
      isFavorite: ids.includes(eventNew.id) ?? false
    }));
  }
);