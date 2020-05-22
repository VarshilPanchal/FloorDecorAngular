import { Component, OnInit, Input } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetail } from 'src/app/forms/model/OrderDetail.model';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  // @Input() order :OrderDetail;

  userOrderDetail: OrderDetail;
  id;
  // order;
  editMode;


  constructor(private router: Router, private httpService: HttpservicesService, private orderDetailService: OrderDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getuserdetail();
  }

  getuserdetail() {
    this.httpService.getUserId().subscribe(
      data => {
        this.refreshUser(data);
      }
    )
  }

  refreshUser(id) {
    this.orderDetailService.MyOrderDetailById(id).subscribe(
      response => {
        this.userOrderDetail = response;
        console.log(this.userOrderDetail);
      }
    )
  }

  updateOrder(id) {
    // this.userOrderDetail.id;
    this.router.navigate([`placeorder/${id}/edit`]);
  }

  deleteOrder(id){
    this.orderDetailService.deleteUser(id).subscribe(response=>console.log(response));
    this.getuserdetail();
  }

  addNewOrder(){
    this.router.navigate(['product/productlist'])
  }

}
