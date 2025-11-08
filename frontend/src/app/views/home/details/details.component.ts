import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';
import { EventData } from 'src/app/store/models/events';
import { selectEventById } from 'src/app/store/events/events.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [
    IonicModule,
    HeaderLayoutComponent,
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent  implements OnInit {

  eventItem$!: Observable<EventData | null>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.eventItem$ = this.store.select(selectEventById(id));
  }

}
