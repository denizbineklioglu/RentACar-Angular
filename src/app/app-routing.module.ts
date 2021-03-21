import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/car/cardto/cardto/cardto.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandID",component:CarComponent},
  {path:"cars/colors/:colorID",component:CarComponent},
  {path:"cars/getcardetailbyid/:carID",component:CardtoComponent},
  {path:"cars/filtercar/:brandID/:colorID",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
