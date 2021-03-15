import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  cars:Car[]=[]
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     if(params ["carID"]){
       this.getcardetail(params["carID"])
     }
   })
  }
  
  getcardetail(carId:number){
    this.carService.getcardetail(carId).subscribe(response => {
      this.cars = response.data
    })
  }

}
