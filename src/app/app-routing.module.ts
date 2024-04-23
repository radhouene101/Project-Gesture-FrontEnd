import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";
import {ContestComponent} from "./pages/contest/contest.component";

const routes: Routes = [
  {
    path :'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path:'contest',
    component:ContestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
