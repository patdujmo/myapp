import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports:[
    IonicModule
  ]
})
export class AppComponent implements OnInit{

  isMobile: boolean = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.initRouting();
    this.headerService.initHeader();
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
