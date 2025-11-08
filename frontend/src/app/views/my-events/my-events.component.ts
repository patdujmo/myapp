import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { EventBoxComponent } from 'src/app/components/event-box/event-box.component';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';
import { selectAllFavorites } from 'src/app/store/favorites/favorites.selector';
import { EventData } from 'src/app/store/models/events';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss'],
  imports: [
    IonicModule,
    HeaderLayoutComponent,
    CommonModule,
    EventBoxComponent
  ]
})
export class MyEventsComponent  implements OnInit {

  favorites$: Observable<EventData[]> = of([]);

  constructor(private store: Store) { }

  ngOnInit() {
    this.favorites$ = this.store.select(selectAllFavorites);
  }

}
