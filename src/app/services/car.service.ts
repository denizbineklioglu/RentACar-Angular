import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardtoComponent } from '../components/car/cardto/cardto/cardto.component';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/"

   getcars():Observable<ListedResponseModel<Car>>{
     let newPath=this.apiUrl + "cars/getall"
     return this.httpClient.get<ListedResponseModel<Car>>(newPath)
   }
        
  getcarsbybrands(brandId:number):Observable<ListedResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getbybrand?id=" + brandId
    return this.httpClient
    .get<ListedResponseModel<Car>>(newPath)
  }

   getbyid(carID:number):Observable<ListedResponseModel<CarDetail>>{
     let newPath = this.apiUrl + "cars/add?id=" + carID
     return this.httpClient.get<ListedResponseModel<CarDetail>>(newPath)
   }
    
  getcarsbycolors(colorId:number):Observable<ListedResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolor?id=" + colorId
    return this.httpClient
    .get<ListedResponseModel<Car>>(newPath)
  }
  
  getcarbybrandandcolorid(brandID:number,colorID:number):Observable<ListedResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/filtercar?brandID=" + brandID + "&colorID=" + colorID
    return this.httpClient.get<ListedResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car);
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
  }
}
