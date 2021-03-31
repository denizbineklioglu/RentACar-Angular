import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

   userUpdateForm:FormGroup;
   user:UserModel;

  constructor(private authService:AuthService,
              private userService:UserServiceService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.userUpdate();
    this.getUserByid();
  }
  
  createUserUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
    })
  }

  userUpdate(){
    if(this.userUpdateForm.valid){
      let userModel = Object.assign({userId:this.user.userId},this.userUpdateForm.value)
      this.userService.update(userModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      }, responseError => {
        this.toastrService.error(responseError.error,"Hatalı giriş")
      })
    } else {
      this.toastrService.error("Formunuz Eksik","Hata");
    }
  }

  getUserByid(){
    this.userService.getbyid(this.authService.getUserId()).subscribe(response => {
      this.user = response.data;
      this.userUpdateForm.patchValue(response.data);
    })
  }
}
