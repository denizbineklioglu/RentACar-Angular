import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/car/cardto/cardto/cardto.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandID",component:CarComponent},
  {path:"cars/colors/:colorID",component:CarComponent},
  {path:"cars/getcardetailbyid/:carID",component:CardtoComponent},
  {path:"cars/filtercar/:brandID/:colorID",component:CarComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"payments/add:payment",component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
