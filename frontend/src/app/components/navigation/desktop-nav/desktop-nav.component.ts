import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss'],
  imports: [IonicModule, RouterModule, CommonModule],
  standalone: true,
})
export class DesktopNavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
