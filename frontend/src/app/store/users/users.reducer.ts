import { createReducer, on } from '@ngrx/store';
import { clearCurrentUser, setCurrentUser } from './users.actions';
import { UserState } from './users.state';

export const initialUserState: UserState = {
  currentUser: null,
};

export const usersReducer = createReducer(
  initialUserState,
  on(setCurrentUser, (state, { user }) => ({ ...state, currentUser: user })),
  on(clearCurrentUser, (state) => ({ ...state, currentUser: null }))
);
