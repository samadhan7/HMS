import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SecurityDashboardComponent } from './pages/security-guard/security-dashboard/security-dashboard.component';
import { securityGuard } from './services/security.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { adminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { BookingComponent } from './pages/admin/booking/booking.component';
import { SecurityguardsComponent } from './pages/admin/securityguards/securityguards.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin/guards/signup',
    component:SignupComponent,
    pathMatch:'full',
    canActivate:[adminGuard],
  },
  {
    path:'security-dashboard',
    component:SecurityDashboardComponent,
    pathMatch:'full',
    canActivate:[securityGuard]
  },
  {
    path:'admin',
    component:DashboardComponent,
    // pathMatch:'full',
    canActivate:[adminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'booking',
        component:BookingComponent,
      },
      {
        path:'guards',
        component:SecurityguardsComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
