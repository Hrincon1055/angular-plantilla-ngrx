import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { PruebaComponent } from './prueba/prueba.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, LayoutAdminComponent, PruebaComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [DashboardComponent, LayoutAdminComponent, PruebaComponent],
})
export class PagesModule {}
