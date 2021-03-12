import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[]
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getcardetails()
  }
 
  getcardetails(){
    this.carService
    .getcardetail()
    .subscribe((response)=>{
      this.cars=response.data
    })
  }
}
