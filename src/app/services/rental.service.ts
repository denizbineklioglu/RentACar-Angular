import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/rentals/rentaldetails"

  getrentaldetails():Observable<rentalResponseModel>{
     return this.httpClient
     .get<rentalResponseModel>(this.apiUrl)
  }
}
