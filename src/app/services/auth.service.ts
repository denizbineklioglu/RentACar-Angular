import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModels';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { passwordModel } from '../models/passwordModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44350/api/auth/"
  userId:number
  userName:string
  jwtHelper:JwtHelperService = new JwtHelperService();

  constructor(private  httpClient:HttpClient,
              private localStorageService:LocalStorageService) 
              { 
                this.setUserId();
              }

  login(loginModel:LoginModel){
     return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

  isAuthenticated(){
    if(this.localStorageService.get("token")){
      return true;
    } else {
      return false
    }
  }

  setUserId(){
     if(this.localStorageService.get("token")){
       var decoded = this.jwtHelper.decodeToken(this.localStorageService.get("token"))
        var propUserId = Object.keys(decoded).filter(u=> u.endsWith("/nameidentifier"))[0]
        this.userId = Number(decoded[propUserId])
     }
  }

  getUserId():number{
    return this.userId;
  }

  getUserName(){
    var decoded = this.jwtHelper.decodeToken(this.localStorageService.get("token"))
    var propUserName = Object.keys(decoded).filter(u=> u.endsWith("/name"))[0]
    return (decoded[propUserName]);
  }

  changePassword(passwordModel:passwordModel):Observable<ResponseModel>{
    let newPath = this.apiUrl + "changePassword"
    return this.httpClient.post<ResponseModel>(newPath,passwordModel);
  }
}
