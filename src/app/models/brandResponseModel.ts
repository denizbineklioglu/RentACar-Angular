import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface brandResponseModel extends ResponseModel{
    data:Brand[]
}