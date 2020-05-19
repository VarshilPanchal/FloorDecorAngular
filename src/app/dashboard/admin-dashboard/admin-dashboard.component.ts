import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderDetail } from 'src/app/forms/model/OrderDetail.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  content: '';
  orderDetail:OrderDetail;
  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }


  totalOrder() {

    this.orderDetailService.getAllOrder().subscribe(
      response => this.orderDetail = response)

  }

  approvedOrder() {

    this.orderDetailService.getApprovedOrder().subscribe(
      response => this.orderDetail = response)

  }

  rejectedOrder() {

    this.orderDetailService.getRejectedOrder().subscribe(
      response => this.orderDetail = response)

  }


}
