import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl="https://localhost:44350/api/"

  constructor(private httpClient:HttpClient) { }

  getcarImages(carId:number):Observable<ListedResponseModel<CarImage>>{
      let newPath = this.apiUrl + "carimages/getcarimage?id=" + carId 
      return this.httpClient.get<ListedResponseModel<CarImage>>(newPath)
  }
}
