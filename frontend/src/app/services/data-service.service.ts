import { Injectable } from '@angular/core';
import { ContentBoxItem } from '../components/content-box/content-box.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  contentItemCar: ContentBoxItem[] = [
    { 
      title: 'BMW 3er Touring',
      title2: 'Diesel • Automatik • Klima',
      description: 'Ein besseres Auto gibt es nicht. Sehr gut in der Ausstattung und in einem Top Zustand!',
      details: '124.000 km',
      date: '05.07.2025',
      location: 'München'
    },
    { 
      title: 'Audi A4 Avant',
      title2: 'Benzin • Schaltgetriebe',
      description: 'Ein besseres Auto gibt es nicht. Sehr gut in der Ausstattung und in einem Top Zustand!',
      details: '89.500 km',
      date: '01.06.2024',
      location: 'Hamburg'
    },
  ];

  constructor() { }

  getDataMockCar() {
    return this.contentItemCar;
  }
}
