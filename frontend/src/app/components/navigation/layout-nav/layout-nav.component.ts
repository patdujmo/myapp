import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from "../desktop-nav/desktop-nav.component";

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss'],
  imports: [IonicModule, CommonModule, MobileNavComponent, DesktopNavComponent],
  standalone: true,
})
export class LayoutNavComponent  implements OnInit {

  isMobile: boolean = false;

  constructor(
    private platform: Platform
  ) { }

  ngOnInit() {
    this.checkPlatform();
    // Optional: Lauschen auf Größenänderungen, falls sich die Ausrichtung ändert
    /*this.platform.resize.subscribe(() => {
      this.checkPlatform();
    });*/
  }

  checkPlatform() {
    this.isMobile = this.platform.is('mobile') || this.platform.is('android') || this.platform.is('ios');
    console.log(this.isMobile);
    // Alternativ für eine breitere Definition von "Desktop":
    // this.isMobile = this.platform.is('mobileweb') || this.platform.is('android') || this.platform.is('ios') || this.platform.is('tablet');
    // oder einfach: this.isMobile = !this.platform.is('desktop');
  }

}
