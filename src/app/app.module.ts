import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import {TestService} from "./services/testService/test.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { ContestComponent } from './pages/contest/contest.component';
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";
import {ProjectsService} from "./services/services/projects.service";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./components/footer/footer/footer.component";
import { AddContestComponent } from './components/contestForm/add-contest/add-contest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ContestComponent,
    AdminDashboardComponent,
    ContestComponent,
    FooterComponent,
    AddContestComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        HttpClientModule,
        FormsModule,
        // necessary so that httpClient service works


    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
