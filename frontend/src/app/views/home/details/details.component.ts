import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';

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

  constructor() { }

  ngOnInit() {}

}
