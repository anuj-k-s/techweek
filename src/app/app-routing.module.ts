import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { BookingStatusLayoutComponent } from './layouts/booking-status-layout.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { RankReportLayoutComponent } from './layouts/rank-report-layout.component';
import { RankReportComponent } from './rank-report/rank-report.component';
import { RankLayoutComponent } from './layouts/rank-layout.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'register',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: BookingStatusLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'booking-status',
        component: BookingStatusComponent
      }
    ]
  },
  {
    path: '',
    component: RankReportLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'rank-report',
        component: RankReportComponent
      }
    ]
  },
  {
    path: '',
    component: RankLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'rank',
        component: RankComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
