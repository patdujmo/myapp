import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventsAdapter, EventsState } from './events.reducer';

// Feature State holen
export const selectEventsState = createFeatureSelector<EventsState>('events');

// Adapter-Selectors generieren
const { selectAll, selectEntities, selectIds, selectTotal } =
  eventsAdapter.getSelectors(selectEventsState);

// Alle Events
export const selectAllEvents = selectAll;

// Einzelnes Event nach ID
export const selectEventById = (id: string) =>
  createSelector(selectEntities, (entities) => entities[id] ?? null);

// Anzahl
export const selectEventCount = selectTotal;
