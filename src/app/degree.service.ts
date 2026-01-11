import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DegreeResponse } from './models/degree.interface';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
private apiUrl = 'http://localhost:8000/api/generate';

  constructor(private http: HttpClient) {}

  getDegreeRecommendations(prompt: string): Observable<DegreeResponse> {
    return this.http.post<DegreeResponse>(this.apiUrl, { prompt });
  }
}
