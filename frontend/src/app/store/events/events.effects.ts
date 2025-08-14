import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadEvents, loadEventsFailure, loadEventsSuccess } from "./events.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { DataService } from "src/app/services/data-service.service";


@Injectable()
export class EventsEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      mergeMap(() => {
        return this.dataService.getAllEvents('9134').pipe(
          map(events => loadEventsSuccess({events})),
          catchError(error => of(loadEventsFailure({ error })))
        )
      })
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}