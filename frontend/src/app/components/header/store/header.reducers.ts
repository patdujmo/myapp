import { createReducer, on } from '@ngrx/store';
import { setHeader } from './header.actions';

export interface HeaderState {
  showBackButton: boolean;
  showSaveButton: boolean;
  showLogo: boolean;
  showTitle: string;
  backButtonRoute: string;
}

export const initialState: HeaderState = {
  showBackButton: false,
  showSaveButton: false,
  showLogo: true,
  showTitle: '',
  backButtonRoute: '',
};

export const headerReducer = createReducer(
  initialState,
  on(setHeader, (state, action) => ({
    ...state,
    ...action,
  }))
);
