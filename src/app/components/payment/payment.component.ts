import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Form, FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 
  payments:Payment[]
  nameSurname:string
  cardNo:string
  expirationDate:string
  cvc:string
  isCheck:boolean=false;
  cardto:CarDetail
  rental:Rental

 paymentAddForm:FormGroup;


  constructor(private paymentService:PaymentService,
              private rentalService:RentalService,
              private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPaymentAddForm();
  }
  
  createPaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      nameSurname:["",Validators.required],
      cardNo:["",Validators.required],
      expirationDate:["",Validators.required],
      cvc:["",Validators.required],
    })
  }

  add(){
    
  }
}
