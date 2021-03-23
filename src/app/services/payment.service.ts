import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/"

  addPayment(payment:Payment){
    let newPath = this.apiUrl + "payments/add";
    this.httpClient.post(newPath,payment).subscribe();

  }
}
