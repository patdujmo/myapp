import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContentBoxComponent } from 'src/app/components/content-box/content-box.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { HeaderLayoutComponent } from 'src/app/components/header/header-layout/header-layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ContentBoxComponent,
    HeaderLayoutComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  implements OnInit {

  constructor(
    private readonly dataService: DataServiceService
  ) { }

  ngOnInit() {}

  getData() {
    return this.dataService.getDataMockCar();
  }

}
