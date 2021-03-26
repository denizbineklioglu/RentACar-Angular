import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup
  carID:number

  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private carService:CarService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      carID:[this.carID],
      brandName:["",Validators.required],
      colorName:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
    })
  }

  update(){
    if(this.carUpdateForm.valid) {
      let carModel = Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      },responseError=> {
        if(responseError.errors.Errors.length>0){
          for (let i = 0; i < responseError.errors.Errors.length; i++) {
           this.toastrService.error(responseError.errors.Errors,"Doğrulama Hatası") 
          }
        }
      })
    } else {
      this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

}
