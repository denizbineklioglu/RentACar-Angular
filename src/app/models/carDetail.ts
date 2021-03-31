import { NumberValueAccessor } from "@angular/forms";
import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number
    carName:string
    brandName:string
    colorName:string
    dailyPrice:number
    modelYear:number
    imagePath:string
    findeksPoint:number
}