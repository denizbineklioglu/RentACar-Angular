import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface rentalResponseModel extends ResponseModel{
    data:Rental[]
}