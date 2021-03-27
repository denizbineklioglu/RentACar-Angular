import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   currentUserID:number;
   user:UserModel

  constructor(private authService:AuthService,
              private userService:UserServiceService,
              private localStorageService:LocalStorageService,
              private router:Router) { }

  ngOnInit(): void {
    this.currentUserID = this.authService.getUserId();
    this.getbyid();
  }

  isAuthotanced(){
    return this.authService.isAuthenticated();
  }

  getbyid(){
    this.userService.getbyid(this.currentUserID).subscribe(response=>{
      this.user = response.data;
    })
  }

  logOut(){
    this.localStorageService.clear();
    this.router.navigate(["/cars"]);
  }

  getUserName(){
    return this.authService.getUserName();
  }
}
