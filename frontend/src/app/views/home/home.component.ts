import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';
import { EventBoxComponent } from 'src/app/components/event-box/event-box.component';
import { Store } from '@ngrx/store';
import { selectAllEvents } from 'src/app/store/events/events.selector';
import { Observable } from 'rxjs';
import { EventData } from 'src/app/store/events/events.model';

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

  eventData$!: Observable<EventData[]>

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit() {
    this.eventData$ = this.store.select(selectAllEvents);
  }

}
