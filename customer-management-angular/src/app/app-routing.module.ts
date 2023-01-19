import { UpdatedCustomerComponent } from './components/dashboard/updated-customer/updated-customer.component';
import { AuthGuradGuard } from './shared/auth-gurad.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SigupComponent } from './components/auth/sigup/sigup.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuradGuard],
  },
  {
    path: 'update-customer/:id',
    component: UpdatedCustomerComponent,
    canActivate: [AuthGuradGuard],
  },

  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SigupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
