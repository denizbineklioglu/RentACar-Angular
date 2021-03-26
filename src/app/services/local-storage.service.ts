import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  delete(key:string){
    localStorage.removeItem(key);
  }

  add(key:string,value:string){
    localStorage.setItem(key,value);
  }

  get(value:string){
    return localStorage.getItem(value);
  }

  clear(){
    localStorage.clear();
  }
   
}
