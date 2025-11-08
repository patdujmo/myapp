import { createAction, props } from '@ngrx/store';
import { UserData } from '../models/users';

export const setCurrentUser = createAction(
  '[User] Set Current User',
  props<{ user: UserData }>()
);

export const clearCurrentUser = createAction('[User] Clear Current User');
