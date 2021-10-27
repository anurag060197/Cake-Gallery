import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CakeComponent } from './cake/cake.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'checkout', children: [
    {path: '', redirectTo: 'summary', pathMatch: 'prefix'},
    {path: 'summary', component: SummaryComponent},
    {path: 'address', component: AddressComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'success', component: SuccessComponent}    
  ], component: CheckoutComponent},
  {path: 'cake/:cakeid', component: CakedetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
