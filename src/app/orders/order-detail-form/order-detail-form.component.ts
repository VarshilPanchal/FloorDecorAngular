import { Component, OnInit } from '@angular/core';
import { OrderDetail } from 'src/app/forms/model/OrderDetail.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/Forms/model/Product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-order-detail-form',
  templateUrl: './order-detail-form.component.html',
  styleUrls: ['./order-detail-form.component.css']
})
export class OrderDetailFormComponent implements OnInit {
  orderDetail: OrderDetail;
  id: number;
  product: Product;
  bookingForm: FormGroup;
  submitted = false;
  errorMessage;
  order;
  editMode = false;

  constructor(private userHttpService: HttpservicesService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private orderServices: OrderDetailService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.fetchId(this.id);
        console.log(this.id)
        // this.editMode = ;
        // this.order = new OrderDetail();
        // this.orderServices.GetSingleOrderByID(this.id).subscribe(
        //   data => this.order = data
        // )
        // const tempId = this.id;
      });
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+))$/)]],
      address: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+))$/)]],
      productId: [this.id],
      userId: [null],
    })
    this.orderDetail = {
      id: null,
      productId: this.fetchId(this.id),
      userId: null,
      name: '',
      address: '',
      landmark: '',
      pincode: null,
      city: '',
      phoneNumber: null,

    }

  }

  get f() {
    return this.bookingForm.controls;
  }


  fetchId(id) {
    console.log(id);
    return id;
  }

  placeorder(bookingForm) {
    this.submitted = true;

    this.orderDetail.productId = this.orderDetail.productId;
    this.orderDetail.userId = +window.sessionStorage.getItem('id');
    this.orderDetail.name = this.bookingForm.get('name').value;
    this.orderDetail.address = this.bookingForm.get('address').value;
    this.orderDetail.landmark = this.bookingForm.get('landmark').value;
    this.orderDetail.pincode = this.bookingForm.get('pincode').value;
    this.orderDetail.city = this.bookingForm.get('city').value;
    this.orderDetail.phoneNumber = this.bookingForm.get('phoneNumber').value;
    this.orderServices.placeOrder(this.orderDetail).subscribe(
      response => {console.log(response)
      this.router.navigate(['myorder'],{relativeTo: this.route});
       }
        ,error => {
      this.errorMessage = error.error.message;
    })


    console.log(this.orderDetail)
  }


  // updateOrder(id, order) {
  //   this.orderServices.updatOrder(id, order).subscribe(
  //     response => console.log(response)

  //   )
  //   this.router.navigate(['myorder'])


  // }


}
