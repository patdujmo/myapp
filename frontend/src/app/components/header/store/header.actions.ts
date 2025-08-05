import { createAction, props } from '@ngrx/store';

export const setHeader = createAction(
  '[Header] Set Header',
  props<{
    showBackButton?: boolean;
    backButtonRoute?: string;
    showSaveButton?: boolean;
    showLogo?: boolean;
    showTitle?: string;
  }>()
);