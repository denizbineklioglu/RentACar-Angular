import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl= "https://localhost:44350/api/"

  constructor(private httpClient:HttpClient) { }

  save(creditCard:CreditCard):Observable<ResponseModel>{
    let newPath = this.apiUrl + "creditCards/add";
    return this.httpClient.post<ResponseModel>(newPath,creditCard);
  }

  getCardByUserId(userID:number):Observable<ListedResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "creditCards/getcardbyuserid?id=" + userID
    return this.httpClient.get<ListedResponseModel<CreditCard>>(newPath)
  }
}
