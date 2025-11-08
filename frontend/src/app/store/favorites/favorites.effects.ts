import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/services/data-service.service';
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { addFavorite, addFavoriteSuccess, loadFavorites, loadFavoritesFailure, loadFavoritesSuccess, removeFavorite, removeFavoriteSuccess } from './favorites.actions';
import { Store } from '@ngrx/store';
import { selectCurrentUserId } from '../users/users.selector';

@Injectable()
export class FavoritesEffects {
  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadFavorites),
      switchMap(() => this.store.select(selectCurrentUserId)),
      mergeMap((currentUserId) => {
        return this.dataService.getUserFavorites(currentUserId).pipe(
          map(favorites => loadFavoritesSuccess({ favorites })),
          catchError(error => of(loadFavoritesFailure({ error })))
        )
      })
  ));

  addFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFavorite),
      withLatestFrom(this.store.select(selectCurrentUserId)),
      mergeMap(([{ event }, userId]) => {
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
      withLatestFrom(this.store.select(selectCurrentUserId)),
      mergeMap(([{ eventId }, userId]) => {
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
