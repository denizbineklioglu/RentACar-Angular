import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordChangeForm:FormGroup;
  userId:number;

  constructor(private authService:AuthService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createPasswordChangeForm();
    this.userId = this.authService.getUserId();
  }
  
   createPasswordChangeForm(){
     this.passwordChangeForm = this.formBuilder.group({
       oldPassword:["",Validators.required],
       newPassword:["",Validators.required],
     })
   }

  changePassword(){
    if(this.passwordChangeForm.valid){
      let passwordModel = Object.assign({userId:this.userId},this.passwordChangeForm.value)
      this.authService.changePassword(passwordModel).subscribe(response =>{
        this.toastrService.success(response.message,"Başarılı")
      }, responseError => {
        this.toastrService.error(responseError.error,"Hata")
      })
    } else {
      this.toastrService.error("Hata")
    }
  }
}
