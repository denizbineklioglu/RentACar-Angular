import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[]
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params["brandID"]){
        this.getcarsbybrand(params["brandID"])
      } else if (params["colorID"]){
         this.getcarsbycolor(params["colorID"])
      } else {
        this.getcars()
      }
    })
  }

  getcars(){
    this.carService
    .getcars()
    .subscribe(response =>{
      this.cars=response.data
    })
  }

  getcardetails(){
    this.carService
    .getcardetail()
    .subscribe(response => {
       this.cars = response.data
    })
  }

  getcarsbybrand(brandID:number){
    this.carService.getcarsbybrands(brandID).subscribe(response =>{
      this.cars= response.data
    })
  }

  getcarsbycolor(colorID:number){
    this.carService.getcarsbycolors(colorID).subscribe(response => {
      this.cars = response.data
    })
  }
}
