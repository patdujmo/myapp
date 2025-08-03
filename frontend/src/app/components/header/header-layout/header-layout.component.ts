import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from '../desktop-header/desktop-header.component';
import { PlatformService } from 'src/app/services/platform.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
  imports:[
    IonicModule,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    CommonModule
  ],
  standalone: true,
})
export class HeaderLayoutComponent  implements OnInit {

  isMobile = false;

  constructor(private platform: PlatformService) { }

  ngOnInit() {
    this.isMobile = this.platform.isMobile();
  }

}
