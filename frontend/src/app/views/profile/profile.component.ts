import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [IonicModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
