import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebaComponent } from './prueba/prueba.component';

const childRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'prueba',
    component: PruebaComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
