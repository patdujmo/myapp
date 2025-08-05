import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeaderState } from './header.reducers';

export const selectHeaderState = createFeatureSelector<HeaderState>('header');

export const selectShowBackButton = createSelector(
  selectHeaderState,
  state => state.showBackButton
);

export const selectShowSaveButton = createSelector(
  selectHeaderState,
  state => state.showSaveButton
);

export const selectShowLogo = createSelector(
  selectHeaderState,
  state => state.showLogo
);

export const selectTitle = createSelector(
  selectHeaderState,
  state => state.showTitle
);