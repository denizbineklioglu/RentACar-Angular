import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-findeks-point',
  templateUrl: './findeks-point.component.html',
  styleUrls: ['./findeks-point.component.css']
})
export class FindeksPointComponent implements OnInit {

   findeksPointForm:FormGroup

  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  createFindeksForm(){
    this.findeksPointForm = this.formBuilder.group({
        firstName:["",Validators.required],
        lastName:["",Validators.required]
    })
  }

}
