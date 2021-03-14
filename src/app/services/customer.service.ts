import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/customers/getall"

  getcustomers():Observable<ListedResponseModel<Customer>>{
    return this.httpClient
    .get<ListedResponseModel<Customer>>(this.apiUrl)
  }
}
