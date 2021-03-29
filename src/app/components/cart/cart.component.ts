import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators, FormGroup ,FormControl ,FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customers: CustomerDetail[] = []; 
  customerss:Customer[]
  currentCustomer: Customer;
  currentCar: Car;
  
  cars:Car[]=[]
  totalPrice: number;
  customerID:number
  carID:number
  rentDate: Date;
  returnDate: Date;
  isPaymentActive : boolean;
  rentalAddForm : FormGroup;

  constructor(private customerService: CustomerService,
    private carService: CarService,
    private rentalService : RentalService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private carDetailService:CardtoService,
    private router:Router) { }

  ngOnInit(): void {
    this.rentDate = new Date();
    this.returnDate = new Date();

    this.getCars();
    this.createRentalAddForm();
    this.getCustomerDetails();

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['carID']) {
        this.getCarDetailsById(params['carID']);
      }
    });
  }
  
  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carID: [""],
      customerID : ["",Validators.required],
      rentDate : ["",Validators.required],
      returnDate:["",Validators.required]     
    })
  }

  add(){
    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({},this.rentalAddForm.value)
      rentalModel.rentdate = this.rentDate
      rentalModel.returnDate=this.returnDate
      this.rentalService.addRental(rentalModel);
      this.toastrService.success("Ödeme sayfasına yönlendiriliyorsunuz","Başarılı");
      this.router.navigate(["/payment"])
    } else {
      this.toastrService.error("Formunuz Eksik","Hata")
    }

    
    
    
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data
    });
  }

  getCarDetailsById(carId:number){
    this.carDetailService.getcardetail(carId).subscribe(response=>{
      this.currentCar = response.data[0];
      console.log(this.currentCar);
    })
  }

  getCustomers(){
    this.customerService
    .getcustomers()
    .subscribe((response) => {
      this.customerss=response.data
    })
  }

  setCartActive(){
    this.isPaymentActive = true;
  }

  getCars(){
    this.carService.getcars().subscribe(response =>{
      this.cars = response.data
    })
  }

  calcTotalPrice(){
    
   }
  
}
