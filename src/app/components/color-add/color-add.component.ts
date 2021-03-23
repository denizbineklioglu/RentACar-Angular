import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private brandService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorAdd();
  }
  createColorAdd(){
    this.colorAddForm = this.formBuilder.group({
     brandName:["",Validators.required]
    })
 }

 add(){
  if(this.colorAddForm.valid) {
    let carModel = Object.assign({},this.colorAddForm.value)
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
