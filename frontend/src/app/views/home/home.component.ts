import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';
import { EventBoxComponent } from 'src/app/components/event-box/event-box.component';
import { Store } from '@ngrx/store';
import { selectEventsError, selectEventsLoading, selectEventsWithFavorites } from 'src/app/store/events/events.selector';
import { Observable } from 'rxjs';
import { EventData } from 'src/app/store/models/events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventBoxComponent,
    HeaderLayoutComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  implements OnInit {

  eventData$!: Observable<EventData[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit() {
    this.eventData$ = this.store.select(selectEventsWithFavorites)
    this.loading$ = this.store.select(selectEventsLoading);
    this.error$ = this.store.select(selectEventsError);
  }

}
