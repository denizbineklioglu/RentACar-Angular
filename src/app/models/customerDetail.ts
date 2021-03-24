import { Customer } from "./customer";

export interface CustomerDetail extends Customer{
    firstName:string;
    lastName:string;
}