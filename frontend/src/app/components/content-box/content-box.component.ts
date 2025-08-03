import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlatformService } from 'src/app/services/platform.service';

export interface ContentBoxItem {
  title: string,
  title2: string,
  description: string,
  details: string,
  date: string,
  location: string
}

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentBoxComponent  implements OnInit {

  @Input() item!: ContentBoxItem;

  constructor(
    private readonly router: Router,
    private readonly platform: PlatformService
  ) { }

  ngOnInit() {}

  navigate() {
    if (this.platform.isMobile()) {
      this.router.navigate(['/tabs/home/details']);
    } else {
      this.router.navigate(['/home/details']);
    }
  }
}
