import { createAction, props } from '@ngrx/store';
import { EventData } from '../models/events';

export const loadEvents = createAction('[Event] Load Events');
export const loadEventsSuccess = createAction('[Event] Load Events Success', props<{ events: EventData[] }>());
export const loadEventsFailure = createAction('[Event] Load Events Failure', props<{ error: any }>());
