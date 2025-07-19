import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [IonicModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
