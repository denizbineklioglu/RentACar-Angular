import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/"

  getrentaldetails():Observable<ListedResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/rentaldetails"
     return this.httpClient
     .get<ListedResponseModel<Rental>>(newPath)
  }

  addRental(rental:Rental){
    let newPath = this.apiUrl + "rentals/add";
    this.httpClient.post(newPath,rental).subscribe();
  }
}
