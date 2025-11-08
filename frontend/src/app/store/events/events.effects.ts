import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadEvents, loadEventsFailure, loadEventsSuccess } from './events.actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DataService } from 'src/app/services/data-service.service';
import { Store } from '@ngrx/store';
import { selectCurrentUserId } from '../users/users.selector';


@Injectable()
export class EventsEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      withLatestFrom(this.store.select(selectCurrentUserId)),
      switchMap((currentUserId) => {
        console.log(currentUserId);
        return this.dataService.getAllEvents('9134').pipe(
          map(events => loadEventsSuccess({events})),
          catchError(error => of(loadEventsFailure({ error })))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store
  ) {}
}