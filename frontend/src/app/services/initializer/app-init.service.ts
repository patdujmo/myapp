import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { loadEventsFailure, loadEventsSuccess } from 'src/app/store/events/events.actions';
import { DataService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private store: Store,
    private dataService: DataService
  ) {}

  async init(): Promise<void> {
    try {
      const events = await firstValueFrom(this.dataService.getAllEvents('9134'));
      this.store.dispatch(loadEventsSuccess({ events }));
    } catch (error) {
      this.store.dispatch(loadEventsFailure({ error }));
    }
  }
}
