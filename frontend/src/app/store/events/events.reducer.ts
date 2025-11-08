import { createReducer, on } from '@ngrx/store';
import { loadEvents, loadEventsFailure, loadEventsSuccess } from './events.actions';
import { eventsAdapter, initialEventsState } from './events.state';


export const eventsReducer = createReducer(
  initialEventsState,
  on(loadEvents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadEventsSuccess, (state, action) =>
    eventsAdapter.setAll(action.events, { ...state, loading: false })
  ),
  on(loadEventsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);