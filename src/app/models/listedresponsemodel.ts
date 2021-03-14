import { ResponseModel } from "./responseModel";

export interface ListedResponseModel<T> extends ResponseModel{
    data:T[]
}