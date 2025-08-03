import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit{

  isMobile: boolean = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.initRouting();
  }

  initRouting() {
    const current = this.location.path();
    if (this.platform.is('mobile')) {
      if (!current.startsWith('/tabs')) {
        this.router.navigateByUrl('/tabs' + current);
      }
    } else {
      if (current.startsWith('/tabs')) {
        const currentPath = current.replace(/^\/(tabs\/)?/, '');
        this.router.navigateByUrl('/' + currentPath);
      }
    }
  }

}
