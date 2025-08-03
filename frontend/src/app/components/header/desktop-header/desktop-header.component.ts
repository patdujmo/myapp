import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
  imports: [IonicModule, RouterModule],
  standalone: true,
})
export class DesktopHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
