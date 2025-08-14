import { Injectable } from '@angular/core';
import { ContentBoxItem } from '../components/content-box/content-box.component';
import { Observable, of } from 'rxjs';
import { EventData } from '../store/events/events.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contentItemCar: ContentBoxItem[] = [
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

  private eventsBoxData: EventData[] = [
    {
      id: '123456',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Sommerkonzert 2025',
      description: 'Erlebe einen unvergesslichen Abend mit Live-Musik unter freiem Himmel.',
      location: 'Berlin',
      distanceKm: 12,
      date: new Date('2025-08-20')
    },
    {
      id: '1234567',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Wochenendmarkt',
      description: 'Regionale Produkte, Handwerk und kulinarische Highlights.',
      location: 'Hamburg',
      distanceKm: 5,
      date: new Date('2025-09-05')
    },
    {
      id: '234567',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Straßenfestival Hamburg',
      description: 'Genieße internationale Streetfood-Küche und Live-Acts in der Hamburger Innenstadt.',
      location: 'Hamburg',
      distanceKm: 8,
      date: new Date('2025-09-05')
    },
    {
      id: '345678',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Kunst Ausstellung Köln',
      description: 'Entdecke zeitgenössische Kunstwerke von lokalen und internationalen Künstlern.',
      location: 'Köln',
      distanceKm: 20,
      date: new Date('2025-10-12')
    },
    {
      id: '456789',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Fußballspiel Düsseldorf',
      description: 'Erlebe die Spannung beim Derby zwischen den lokalen Rivalen live im Stadion.',
      location: 'Düsseldorf',
      distanceKm: 15,
      date: new Date('2025-09-18')
    },
    {
      id: '567890',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Theater Premiere München',
      description: 'Sei dabei bei der Premiere des neuen Theaterstücks im Münchner Stadttheater.',
      location: 'München',
      distanceKm: 25,
      date: new Date('2025-11-01')
    },
    {
      id: '678901',
      imageUrl: 'assets/testdata/concert.png',
      title: 'Familientag im Zoo',
      description: 'Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen. Spaß und Abenteuer für die ganze Familie mit spannenden Tierbegegnungen.',
      location: 'Leipzig',
      distanceKm: 30,
      date: new Date('2025-08-30')
    }
  ];

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDataMockCar() {
    return this.contentItemCar;
  }

  getEventBoxData() {
    return this.eventsBoxData;
  }

  getEventObservable(): Observable<EventData[]> {
    return of(this.eventsBoxData);
  }

  // New Endpoints
  // Alle Events mit Favoriten für einen User
  getAllEvents(userId: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/events?userId=${userId}`);
  }

  // Einzelnes Event nach ID
  getEventById(eventId: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/events/${eventId}`);
  }

  // Favorit hinzufügen
  addFavorite(userId: string, eventId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorites`, { userId, eventId });
  }

  // Favorit entfernen
  removeFavorite(userId: string, eventId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorites`, { body: { userId, eventId } });
  }

  // Favoriten eines Users
  getUserFavorites(userId: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/users/${userId}/favorites`);
  }
}
