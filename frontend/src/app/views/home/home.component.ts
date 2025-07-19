import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
