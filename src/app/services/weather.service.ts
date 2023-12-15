import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { State } from '../models/state.model';
import { StatesMock } from './states.mock';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  http = inject(HttpClient);

  getStateList(): Observable<State[]> {
    return of(StatesMock);
  }

  getForecastByCode(code: string): Observable<any> {
    const url = `https://api.weather.gov/gridpoints/${code}/31,80/forecast`;

    return this.http.get<any>(url).pipe(
      map(({ properties }) => ({
        properties,
      }))
    );
  }
}
