import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventData } from '../store/models/events';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../store/models/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private readonly http: HttpClient
  ) { }

  getUserProfile(userId: string): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/users/${userId}`);
  }

  getAllEvents(userId: string): Observable<EventData[]> {
    return this.http.get<EventData[]>(`${this.apiUrl}/events?userId=${userId}`);
  }

  getEventById(eventId: string): Observable<EventData> {
    return this.http.get<EventData>(`${this.apiUrl}/events/${eventId}`);
  }

  addFavorite(userId: string, eventId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorites/users/${userId}/${eventId}`, {});
  }

  removeFavorite(userId: string, eventId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorites/users/${userId}/${eventId}`, {});
  }

  getUserFavorites(userId: string): Observable<EventData[]> {
    return this.http.get<EventData[]>(`${this.apiUrl}/users/${userId}/favorites`);
  }
}
