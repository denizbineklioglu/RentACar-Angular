import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

   brandUpdateForm:FormGroup;
   brandID:number
  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm(){
    this.brandUpdateForm= this.formBuilder.group({
      brandID:[this.brandID],
      brandName:["",Validators.required]
    })
  }

  update(){
    if(this.brandUpdateForm.valid) {
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response => {
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
