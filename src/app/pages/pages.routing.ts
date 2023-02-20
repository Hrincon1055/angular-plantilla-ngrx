import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutAdminComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./child-routes.module').then((m) => m.ChildRoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
