import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { EventData } from '../models/events';

export interface EventsState extends EntityState<EventData> {
  loading: boolean;
  error: any;
};

export const eventsAdapter = createEntityAdapter<EventData>();

export const initialEventsState: EventsState = eventsAdapter.getInitialState({
  loading: false,
  error: null,
});
