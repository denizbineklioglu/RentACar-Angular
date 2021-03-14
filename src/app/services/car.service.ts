import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/cars/getcardetail"

  getcardetail():Observable<ListedResponseModel<Car>>{
    return this.httpClient
    .get<ListedResponseModel<Car>>(this.apiUrl)
  }
}
