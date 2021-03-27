import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators, Form } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private toastrService:ToastrService,
              private localStorageService:LocalStorageService,
              private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required] 
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.localStorageService.add("token",response.data.token);
        this.toastrService.info(response.message)
        setTimeout(()=> {
          this.authService.setUserId()
          this.router.navigate(["/cars"]);
        },400)
        
      },responseError => {
        this.toastrService.error(responseError.error.length>0 && responseError.error) 
        {
          this.toastrService.error(responseError.error,"Hata")
        }})
    } else {
      this.toastrService.error("Formda Eksiklik Var","Hata");
    }

  }
}
