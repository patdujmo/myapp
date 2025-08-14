import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlatformService } from 'src/app/services/platform.service';

export interface EventItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  distanceKm: number;
  date: Date;
}

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class EventBoxComponent  implements OnInit {

  @Input() eventItem!: EventItem;

  constructor(
    private readonly router: Router,
    private readonly platform: PlatformService
  ) { }

  ngOnInit() {}

  navigate(id: string) {
    if (this.platform.isMobile()) {
      this.router.navigate(['/tabs/home/details', id]);
    } else {
      this.router.navigate(['/home/details', id]);
    }
  }

}
