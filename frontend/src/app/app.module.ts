import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ animated: false }),
    AppRoutingModule,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    StoreModule.forRoot({
      header: headerReducer
    }),
    EffectsModule.forRoot([])
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}