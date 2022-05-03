import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  // {
  //     path: 'dashboard',
  //     loadChildren: () =>
  //         import('modules/dashboard/dashboard-routing.module').then(
  //             m => m.DashboardRoutingModule
  //         ),
  // },
  // {
  //     path: 'auth',
  //     loadChildren: () =>
  //         import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  // },
  // {
  //     path: 'error',
  //     loadChildren: () =>
  //         import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
  // },
  // {
  //     path: 'tables',
  //     loadChildren: () =>
  //         import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
  // },
  // {
  //     path: 'users',
  //     loadChildren: () =>
  //     import('modules/users/users-routing.module').then(m => m.UsersRoutingModule),
  // },
  // {
  //     path: 'works',
  //     loadChildren: () =>
  //     import('modules/works/works-routing.module').then(m => m.WorksRoutingModule),
  // },
  // {
  //     path: 'version',
  //     loadChildren: () =>
  //         import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
  // },
  // {
  //     path: '**',
  //     pathMatch: 'full',
  //     loadChildren: () =>
  //         import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
