import { ForecastByStateComponent } from './forecast-by-state/forecast-by-state.component';
import { ForecastRouterOutletComponent } from './forecast-router-outlet.component';
import { StateListComponent } from './state-list/state-list.component';

export default [
  {
    path: '',
    component: ForecastRouterOutletComponent,
    children: [
      {
        path: '',
        component: StateListComponent,
      },
      {
        path: ':code',
        component: ForecastByStateComponent,
      },
    ],
  },
];
