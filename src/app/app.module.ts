import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { SuccessComponent } from './success/success.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    CarousalComponent,
    CakelistComponent,
    CakeComponent,
    SignupComponent,
    CartComponent,
    HomeComponent,
    CakedetailsComponent,
    CheckoutComponent,
    ForgotComponent,
    LoginComponent,
    PageNotFoundComponent,
    SummaryComponent,
    PaymentComponent,
    AddressComponent,
    SuccessComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
