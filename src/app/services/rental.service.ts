import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { Rental } from '../models/rental';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/rentals/rentaldetails"

  getrentaldetails():Observable<ListedResponseModel<Rental>>{
     return this.httpClient
     .get<ListedResponseModel<Rental>>(this.apiUrl)
  }
}
