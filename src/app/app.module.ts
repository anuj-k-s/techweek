import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BookingStatusLayoutComponent } from './layouts/booking-status-layout.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { HttpClientModule }    from '@angular/common/http';
import {SharedService} from './SharedService';
import { RankReportComponent } from './rank-report/rank-report.component';
import { RankReportLayoutComponent } from './layouts/rank-report-layout.component';
import { RankLayoutComponent } from './layouts/rank-layout.component';
import { RankComponent } from './rank/rank.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    BookingStatusLayoutComponent,
    BookingStatusComponent,
    RankReportLayoutComponent,
    RankReportComponent,
    RankLayoutComponent,
    RankComponent,
    SnackbarComponent

  ],
 entryComponents: [SnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,FormsModule,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
