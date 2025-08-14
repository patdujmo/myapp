import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './components/header/desktop-header/desktop-header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { headerReducer } from './components/header/store/header.reducers';
import { AppInitService } from './services/initializer/app-init.service';
import { eventsReducer } from './store/events/events.reducer';
import { EventsEffects } from './store/events/events.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function initializeApp(appInitService: AppInitService) {
  return () => appInitService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ animated: false }),
    AppRoutingModule,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    StoreModule.forRoot(
      {
        header: headerReducer,
        events: eventsReducer
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([EventsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Anzahl der States, die gespeichert werden
      logOnly: false, // true = read-only, false = full control
      autoPause: true, // pausiert wenn DevTools nicht geöffnet
    }),
  ],
  providers: [
    { 
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}