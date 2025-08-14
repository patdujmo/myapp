import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';
import { EventData } from 'src/app/store/events/events.model';
import { selectEventById } from 'src/app/store/events/events.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [
    IonicModule,
    HeaderLayoutComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent  implements OnInit {

  eventData$!: Observable<EventData | null>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.store.select(selectEventById(id)).subscribe((test) => {
      console.log(test);
    });
  }

}
