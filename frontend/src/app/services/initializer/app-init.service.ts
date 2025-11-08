import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { loadEventsFailure, loadEventsSuccess } from 'src/app/store/events/events.actions';
import { DataService } from '../data-service.service';
import { setCurrentUser } from 'src/app/store/users/users.actions';
import { setHeader } from 'src/app/components/header/store/header.actions';
import { loadFavoritesFailure, loadFavoritesSuccess } from 'src/app/store/favorites/favorites.actions';

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
      const currentUser = '9134';
      const events = await firstValueFrom(this.dataService.getAllEvents(currentUser));
      const user = await firstValueFrom(this.dataService.getUserProfile(currentUser));
      const favorites = await firstValueFrom(this.dataService.getUserFavorites(currentUser));
      this.store.dispatch(setHeader({
        showBackButton: false,
        showSaveButton: false,
        showLogo: true
      }));
      this.store.dispatch(setCurrentUser({ user }));
      this.store.dispatch(loadEventsSuccess({ events }));
      this.store.dispatch(loadFavoritesSuccess({ favorites }));
    } catch (error) {
      this.store.dispatch(loadEventsFailure({ error }));
      this.store.dispatch(loadFavoritesFailure({ error }))
    }
  }
}
