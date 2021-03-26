import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

   colorUpdateForm:FormGroup
  colorID:number
  constructor(private formBuilder:FormBuilder,
              private colorService:ColorService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  
   createColorUpdateForm(){
    this.colorUpdateForm= this.formBuilder.group({
      colorID:[this.colorID],
      colorName:["",Validators.required]
    })
   }

   update(){
    if(this.colorUpdateForm.valid) {
      let colorModel = Object.assign({},this.colorUpdateForm.value)
      this.colorService.update(colorModel).subscribe(response => {
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
