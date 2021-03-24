import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customerDetail';
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

  getById(id:number):Observable<ListedResponseModel<Customer>> {
    let newPath = this.apiUrl + "getbyid?id=" + id;
    return this.httpClient.get<ListedResponseModel<Customer>>(newPath);
  }

  getCustomerDetails():Observable<ListedResponseModel<CustomerDetail>> {
    let newPath = this.apiUrl + "getcustomerdetails";
    return this.httpClient.get<ListedResponseModel<CustomerDetail>>(newPath);
  }

}
