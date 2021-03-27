import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://localhost:44350/api/"

  getbyid(id:number):Observable<SingleResponseModel<UserModel>>{
   let newPath = this.apiUrl + "users/getbyid?id=" + id;
   return this.httpClient.get<SingleResponseModel<UserModel>>(newPath)
  }
}
