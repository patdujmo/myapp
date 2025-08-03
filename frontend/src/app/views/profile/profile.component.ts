import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DesktopHeaderComponent } from 'src/app/components/header/desktop-header/desktop-header.component';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonicModule,
    HeaderLayoutComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
