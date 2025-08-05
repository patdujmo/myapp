import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBackButtonRoute, selectShowBackButton, selectShowLogo, selectShowSaveButton, selectTitle } from '../store/header.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
  imports: [
    IonicModule,
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileHeaderComponent  implements OnInit {

  showBackButton$!: Observable<boolean>;
  showSaveButton$!: Observable<boolean>;
  showLogo$!: Observable<boolean>;
  title$!: Observable<string>;
  backButtonRoute$!: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.showBackButton$ = this.store.select(selectShowBackButton);
    this.showSaveButton$ = this.store.select(selectShowSaveButton);
    this.showLogo$ = this.store.select(selectShowLogo);
    this.title$ = this.store.select(selectTitle);
    this.backButtonRoute$ = this.store.select(selectBackButtonRoute);
  }
  
  onSave() {
    console.log('TBD');
  }

}
