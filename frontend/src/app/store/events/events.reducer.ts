import { createReducer, on } from "@ngrx/store";
import { EventData } from "./events.model";
import { loadEvents, loadEventsFailure, loadEventsSuccess } from "./events.actions";
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export interface EventsState extends EntityState<EventData> {
  loading: boolean;
  loaded: boolean;
  error: any;
};

export const eventsAdapter = createEntityAdapter<EventData>({
  selectId: (event) => event.id
});

export const initialState: EventsState = eventsAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null,
});


export const eventsReducer = createReducer(
  initialState,
  on(loadEvents, state => ({ ...state, loading: true, error: null })),
  on(loadEventsSuccess, (state, { events }) =>
    eventsAdapter.setAll(events, { ...state, loading: false, loaded: true })
  ),
  on(loadEventsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);