import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44350/api/brands/getall"
  constructor(private httpClient:HttpClient) { }

  getbrands():Observable<ListedResponseModel<Brand>>{
    return this.httpClient
    .get<ListedResponseModel<Brand>>(this.apiUrl)
  }
}
