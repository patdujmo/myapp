import { createAction, props } from '@ngrx/store';

export const setHeader = createAction(
  '[Header] Set Header',
  props<{
    showBackButton?: boolean;
    showSaveButton?: boolean;
    showLogo?: boolean;
    showTitle?: string;
  }>()
);