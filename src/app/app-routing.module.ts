import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/forecast/router').then(r => r.default),
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.route').then(r => r.default),
  },
  {
    path: '**',
    redirectTo: '/weather',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
