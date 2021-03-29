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
import { AuthService } from 'src/app/services/auth.service';
import { CreditCardService } from 'src/app/services/credit-card.service';

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
  isCheck=false;
  cardto:CarDetail
  rental:Rental

  paymentAddForm:FormGroup;


  constructor(private paymentService:PaymentService,
              private rentalService:RentalService,
              private authService:AuthService,
              private creditCardService:CreditCardService,
              private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private router:Router) { }

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

  saveCard(){
    if(this.isCheck == true){
      let creditCard = Object.assign({userID:this.authService.getUserId()},this.paymentAddForm.value)
      this.creditCardService.save(creditCard).subscribe(response => {
        this.toastrService.success("Başarılı")
      }, errorResponse => {
        this.toastrService.error(errorResponse,"Hata");
      })
    }
  }

  add(){
    if(this.paymentAddForm.valid){
      let paymentModel = Object.assign({},this.paymentAddForm.value)
        paymentModel.nameSurname= this.nameSurname,
        paymentModel.cardNo = this.cardNo,
        paymentModel.expirationDate = this.expirationDate,
        paymentModel.cvc = this.cvc
        this.paymentService.addPayment(paymentModel);
        this.toastrService.success("Ödeme Tamamlandı","Başarılı")
        this.router.navigate(['/'])
    } else {
        this.toastrService.error("Ödeme Başarısız","Hata");
    }
  }
}
