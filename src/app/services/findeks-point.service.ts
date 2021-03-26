import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class FindeksPointService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/customers/"

  findeksPoint(customerID:Customer):Observable<ListedResponseModel<Customer>>{
    let newPath = this.apiUrl + "getcustomerfindekspoint?id=" + customerID
    return this.httpClient.get<ListedResponseModel<Customer>>(newPath)
  }
}
