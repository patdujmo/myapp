import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { setHeader } from '../components/header/store/header.actions';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
  }

  initHeader() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.getChildRoute(this.activatedRoute);
        const data = route.snapshot.data['header'];

        if (data) {
          this.store.dispatch(setHeader(data));
        } else {
          this.store.dispatch(setHeader({
            showBackButton: false,
            showSaveButton: false,
            showLogo: true
          }));
        }
      });
  }

  private getChildRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
