import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.scss'],
  imports: [IonicModule, RouterModule],
  standalone: true,
})
export class TabsPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
