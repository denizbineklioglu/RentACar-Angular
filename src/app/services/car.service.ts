import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListedResponseModel } from '../models/listedresponsemodel';

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

  getcarsbycolors(colorId:number):Observable<ListedResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolor?id=" + colorId
    return this.httpClient
    .get<ListedResponseModel<Car>>(newPath)
  }
  
  getcarbybrandandcolorid(brandID:number,colorID:number):Observable<ListedResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/filtercar?brandID=" + brandID + "&colorID=" + colorID
    return this.httpClient.get<ListedResponseModel<Car>>(newPath);
  }
}
