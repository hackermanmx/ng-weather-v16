import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { WeatherService } from '../../services/weather.service';
import { switchMap, tap, zip } from 'rxjs';
import { State } from '../../models/state.model';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  weatherService = inject(WeatherService);

  states: State[] = [];
  chart: any;

  data$ = this.weatherService.getStateList().pipe(
    tap(states => (this.states = states)),
    switchMap(states =>
      zip(states.map(s => this.weatherService.getForecastByCode(s.code)))
    ),
    tap(forecasts => {
      let periods: Forecast[] = [];
      const datasets = this.states.map((state, i) => {
        const { properties } = forecasts[i];
        periods = properties.periods;

        return {
          label: state.name,
          data: periods.map(({ temperature }: Forecast) => temperature),
          backgroundColor:
            '#' + Math.floor(Math.random() * 16777215).toString(16), // random hex generator
        };
      });

      const labels = periods?.map(({ name }: Forecast) => name);

      this.chart = new Chart('chart', {
        type: 'line',
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true,
          aspectRatio: 2.5,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Temperature',
              },
            },
          },
        },
      });
    })
  );

  constructor() {
    Chart.register(...registerables);
  }
}
