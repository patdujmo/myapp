import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    return this.platform.is('mobile') || this.platform.is('android') || this.platform.is('ios');
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }
}
