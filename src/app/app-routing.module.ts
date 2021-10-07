import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cake/:cakeid', component: CakedetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
