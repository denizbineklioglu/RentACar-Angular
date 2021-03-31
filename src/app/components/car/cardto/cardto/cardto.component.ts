import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  carDetail:CarDetail
  car:Car
  imageBasePath=environment.baseUrl
  isCartActive : boolean;
  
  constructor(private cardtoService:CardtoService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     if(params ["carID"]){
       this.getcardetail(params["carID"])
     }
   })
  }
  
  getcardetail(carID:number){
    this.cardtoService.getcardetail(carID).subscribe(response => {
      this.carDetail = response.data[0]
    })
  }

  setCartActive(){
    this.isCartActive = true;
  }

}
