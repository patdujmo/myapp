import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/store/models/users';
import { selectCurrentUser } from 'src/app/store/users/users.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent  implements OnInit {

  user$!: Observable<UserData | null>;

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.user$ = this.store.select(selectCurrentUser);
  }

}
