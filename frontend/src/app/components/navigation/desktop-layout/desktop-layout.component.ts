import { Component, OnInit } from '@angular/core';
import { DesktopHeaderComponent } from '../../header/desktop-header/desktop-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desktop-layout',
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss'],
  imports: [DesktopHeaderComponent, IonicModule, RouterModule],
  standalone: true,
})
export class DesktopLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
