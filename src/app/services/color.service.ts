import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListedResponseModel } from '../models/listedresponsemodel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44350/api/"
   
  getcolors():Observable<ListedResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getall" 
    return this.httpClient
    .get<ListedResponseModel<Color>>(newPath)
  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color);
  }

  update(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/update",color)
  }
}
