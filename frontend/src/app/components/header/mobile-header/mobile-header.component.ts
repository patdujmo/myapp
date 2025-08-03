import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
