import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/"

  getcardetail(carId:number):Observable<ListedResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailbyid?id=" + carId
    return this.httpClient.get<ListedResponseModel<CarDetail>>(newPath)
 } 
}
