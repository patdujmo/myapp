import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppInitService } from './app/services/initializer/app-init.service';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EventsEffects } from './app/store/events/events.effects';
import { provideEffects } from '@ngrx/effects';
import { headerReducer } from './app/components/header/store/header.reducers';
import { eventsReducer } from './app/store/events/events.reducer';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { usersReducer } from './app/store/users/users.reducer';
import { favoritesReducer } from './app/store/favorites/favorites.reducer';
import { FavoritesEffects } from './app/store/favorites/favorites.effects';
import { UsersEffects } from './app/store/users/users.effects';

export function initializeApp(appInitService: AppInitService) {
  return () => appInitService.init();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(
      {
        header: headerReducer,
        events: eventsReducer,
        user: usersReducer,
        favorites: favoritesReducer
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    provideEffects([EventsEffects, FavoritesEffects, UsersEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    },
    importProvidersFrom(
      IonicModule.forRoot({ animated: false })
    ),
  ]
}).catch(err => console.error(err));