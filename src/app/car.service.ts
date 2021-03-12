import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carResponseModel } from './models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/cars/getcardetail"

  getcardetail():Observable<carResponseModel>{
    return this.httpClient
    .get<carResponseModel>(this.apiUrl)
  }
}
