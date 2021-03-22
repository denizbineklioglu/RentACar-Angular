import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalAddForm:FormGroup
  rentals:Rental[]=[]
  constructor(private formsBuilder:FormBuilder,
              private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getrentaldetails()
  }

  getrentaldetails(){
    this.rentalService
    .getrentaldetails()
    .subscribe((response) => {
     this.rentals=response.data
  })
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formsBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      rentDate:["",Validators.required],
      returndate:["",Validators.required]
    })
  }
}
