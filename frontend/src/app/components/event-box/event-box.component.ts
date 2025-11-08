import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { PlatformService } from 'src/app/services/platform.service';
import { addFavorite, removeFavorite } from 'src/app/store/favorites/favorites.actions';
import { selectIsFavorite } from 'src/app/store/favorites/favorites.selector';
import { EventData } from 'src/app/store/models/events';

export interface EventItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  distanceKm: number;
  date: Date;
}

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class EventBoxComponent  implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject<void>();
  @Input() eventItem!: EventItem;
  isFavorite$!: Observable<boolean>;

  constructor(
    private readonly router: Router,
    private readonly platform: PlatformService,
    private store: Store
  ) { }

  ngOnInit() {
    this.isFavorite$ = this.store.select(selectIsFavorite(this.eventItem.id));
  }

  navigate(id: string) {
    if (this.platform.isMobile()) {
      this.router.navigate(['/tabs/home/details', id]);
    } else {
      this.router.navigate(['/home/details', id]);
    }
  }

  toggleFavorite(eventData: EventData, isFavorite: boolean | null, event: MouseEvent) {
    event.stopPropagation(); // verhindert das Hochpropagieren des Klicks
    event.preventDefault();  // verhindert Standardverhalten (optional)
    const userId = '9134';
    if (isFavorite) {
      this.store.dispatch(removeFavorite({userId, eventId: eventData.id}));
    } else {
      this.store.dispatch(addFavorite({userId, event: eventData}));
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
