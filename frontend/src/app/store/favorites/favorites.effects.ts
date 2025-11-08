import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/services/data-service.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { addFavorite, addFavoriteSuccess, loadFavorites, loadFavoritesFailure, loadFavoritesSuccess, removeFavorite, removeFavoriteSuccess } from './favorites.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class FavoritesEffects {
  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadFavorites),
      mergeMap(() => {
        return this.dataService.getUserFavorites('9134').pipe(
          map(favorites => loadFavoritesSuccess({ favorites })),
          catchError(error => of(loadFavoritesFailure({ error })))
        )
      })
  ));

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavorite),
      mergeMap(({ userId, event }) => {
        this.store.dispatch(addFavoriteSuccess({ event }));
        return this.dataService.addFavorite(userId, event.id);
      }
      )
    ),
    { dispatch: false }
  );

  removeFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFavorite),
      mergeMap(({ userId, eventId }) => {
        this.store.dispatch(removeFavoriteSuccess({eventId}));
        return this.dataService.removeFavorite(userId, eventId);
      }
      )
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store
  ) {}
}
