import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../../services/weather.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-state-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss'],
})
export class StateListComponent {
  weatherService = inject(WeatherService);

  states$ = this.weatherService.getStateList();
}
