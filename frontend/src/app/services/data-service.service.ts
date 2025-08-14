import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventData } from '../store/events/events.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // New Endpoints
  // Alle Events mit Favoriten für einen User
  getAllEvents(userId: string): Observable<EventData[]> {
    return this.http.get<EventData[]>(`${this.apiUrl}/events?userId=${userId}`);
  }

  // Einzelnes Event nach ID
  getEventById(eventId: string): Observable<EventData> {
    return this.http.get<EventData>(`${this.apiUrl}/events/${eventId}`);
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
  getUserFavorites(userId: string): Observable<EventData[]> {
    return this.http.get<EventData[]>(`${this.apiUrl}/users/${userId}/favorites`);
  }
}
