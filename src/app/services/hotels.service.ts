import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { IHotelsResponseBody } from '@lime-models/hotel.model';
import { environment } from 'environments/environment';
import { hotelsAPIData } from '../hotels.data';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  baseUrl = environment.apiBaseUrl;
  hotelSampleData = { ...hotelsAPIData };

  constructor(private http: HttpClient) {}

  getHotels(): Observable<IHotelsResponseBody> {
    // for production demo purpose only
    if (environment.production) {
      return of(this.hotelSampleData);
    }

    return this.http.get(`${this.baseUrl}/hotels`) as Observable<
      IHotelsResponseBody
    >;
  }
}
