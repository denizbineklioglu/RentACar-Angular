import { NumberValueAccessor } from "@angular/forms";

export interface CreditCard{
   ID:number
   userID:number 
   cardNo:string
   nameSurname:string
   expirationDate:Date
   cvv:string
}