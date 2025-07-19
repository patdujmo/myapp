import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  imports: [IonicModule, RouterModule],
  standalone: true,
})
export class MobileNavComponent  implements OnInit {

  isMobile: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.checkPlatform();
    // Optional: Lauschen auf Größenänderungen, falls sich die Ausrichtung ändert
    this.platform.resize.subscribe(() => {
      this.checkPlatform();
    });
  }

  checkPlatform() {
    this.isMobile = this.platform.is('mobile') || this.platform.is('android') || this.platform.is('ios');
    // Alternativ für eine breitere Definition von "Desktop":
    // this.isMobile = this.platform.is('mobileweb') || this.platform.is('android') || this.platform.is('ios') || this.platform.is('tablet');
    // oder einfach: this.isMobile = !this.platform.is('desktop');
  }

}
