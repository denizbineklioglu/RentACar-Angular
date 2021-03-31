import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/car/cardto/cardto/cardto.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandID",component:CarComponent},
  {path:"cars/colors/:colorID",component:CarComponent},
  {path:"cars/getcardetailbyid/:carID",component:CardtoComponent},
  {path:"cardetail",component:CardtoComponent},
  {path:"cars/filtercar/:brandID/:colorID",component:CarComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"cars/update",component:CarUpdateComponent,canActivate:[LoginGuard]},
  {path:"brands/update",component:BrandUpdateComponent,canActivate:[LoginGuard]},
  {path:"colors/update",component:ColorUpdateComponent,canActivate:[LoginGuard]},
  {path:"cart/:carID", component: CartComponent},
  {path:"cart", component: CartComponent},
  {path:"payments/add",component:PaymentComponent},
  {path:"payment",component:PaymentComponent},
  {path:"rental",component:RentalComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
