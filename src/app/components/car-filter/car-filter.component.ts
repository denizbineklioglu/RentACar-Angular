import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  cars:Car[]=[]
  brands:Brand[]=[]
  colors:Color[]=[]
  brandFilter:number;
  colorFilter:number;

  constructor(private brandService:BrandService,
    private colorService:ColorService,private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getcarbybrandandcolorid(brandID:number, colorID:number){
    this.carService.getcarbybrandandcolorid(brandID,colorID)
    .subscribe((response)=> {
      this.cars = response.data
    })
  }

  getBrands(){
    this.brandService
    .getbrands()
    .subscribe((response) => {
      this.brands=response.data
    })
  } 

  getColors(){
    this.colorService
    .getcolors()
    .subscribe((response)=>{
      this.colors=response.data
    })
  }

  getSelectedBrand(brandId:number){
    if(this.brandFilter == brandId){
      return true
    }
    return false
  }

  getSelectedColor(colorId:number){
    if(this.colorFilter == colorId){
      return true
    }
    return false
  }
}
