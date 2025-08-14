import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { loadEventsFailure, loadEventsSuccess } from 'src/app/store/events/events.actions';
import { DataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private store: Store,
    private dataService: DataServiceService
  ) {}

  async init(): Promise<void> {
    try {
      const events = await firstValueFrom(this.dataService.getEventObservable());
      this.store.dispatch(loadEventsSuccess({ events }));
    } catch (error) {
      this.store.dispatch(loadEventsFailure({ error }));
    }
  }
}
