import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../../services/weather.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-by-state',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './forecast-by-state.component.html',
  styleUrls: ['./forecast-by-state.component.scss'],
})
export class ForecastByStateComponent {
  weatherService = inject(WeatherService);
  route = inject(ActivatedRoute);

  forecast$: Observable<any> = this.weatherService.getForecastByCode(
    this.route.snapshot.params?.['code']
  );
}
