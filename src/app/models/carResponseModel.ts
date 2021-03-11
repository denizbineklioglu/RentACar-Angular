import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface carResponseModel extends ResponseModel{
   data:Car[]
}