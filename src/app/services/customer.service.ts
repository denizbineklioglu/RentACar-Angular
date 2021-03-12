import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/customers/getall"

  getcustomers():Observable<customerResponseModel>{
    return this.httpClient
    .get<customerResponseModel>(this.apiUrl)
  }
}
