import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { brandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44350/api/brands/getall"
  constructor(private httpClient:HttpClient) { }

  getbrands():Observable<brandResponseModel>{
    return this.httpClient
    .get<brandResponseModel>(this.apiUrl)
  }
}
