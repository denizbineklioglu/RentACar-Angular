import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44350/api/"
  constructor(private httpClient:HttpClient) { }

  getbrands():Observable<ListedResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient
    .get<ListedResponseModel<Brand>>(newPath)
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand);
  }

  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand)
  }
}
