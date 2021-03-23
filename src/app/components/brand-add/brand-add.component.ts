import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
              private brandService:BrandService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAdd();
  }

  createBrandAdd(){
    this.brandAddForm = this.formBuilder.group({
     brandName:["",Validators.required]
    })
 }
 add(){
  if(this.brandAddForm.valid) {
    let carModel = Object.assign({},this.brandAddForm.value)
    this.brandService.add(carModel).subscribe(response => {
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
