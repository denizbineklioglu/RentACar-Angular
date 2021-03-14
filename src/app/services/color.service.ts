import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListedResponseModel } from '../models/listedresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/colors/getall"
   
  getcolors():Observable<ListedResponseModel<Color>>{
    return this.httpClient
    .get<ListedResponseModel<Color>>(this.apiUrl)
  }
}
