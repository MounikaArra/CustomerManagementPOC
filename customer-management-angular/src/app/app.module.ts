import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigupComponent } from './components/auth/sigup/sigup.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { AddCustomerComponent } from './components/dashboard/add-customer/add-customer.component';
import { NavBarComponent } from './components/dashboard/nav-bar/nav-bar.component';
import { UpdatedCustomerComponent } from './components/dashboard/updated-customer/updated-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigupComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CustomerComponent,
    AddCustomerComponent,
    NavBarComponent,
    UpdatedCustomerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
