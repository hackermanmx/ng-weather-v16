import { ChartRouterOutletComponent } from './chart-router-outlet.component';
import { LineChartComponent } from './line-chart/line-chart.component';

export default [
  {
    path: '',
    component: ChartRouterOutletComponent,
    children: [
      {
        path: 'line-chart',
        component: LineChartComponent,
      },
    ],
  },
];
