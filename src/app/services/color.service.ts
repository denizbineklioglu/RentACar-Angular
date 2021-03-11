import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/ColorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/colors/getall"
   
  getcolors():Observable<ColorResponseModel>{
    return this.httpClient
    .get<ColorResponseModel>(this.apiUrl)
  }
}
