import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderDetail } from 'src/app/forms/model/OrderDetail.model';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private orderServices: OrderDetailService, private router: Router, private route: ActivatedRoute) { }
  order: OrderDetail;
  submitted = false;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.order = new OrderDetail();
        this.orderServices.GetSingleOrderByID(this.id).subscribe(
          data => this.order = data
        )
      })
  }

  updateOrder(id, order) {
    console.log(id, order)
    this.submitted = true;
    this.orderServices.updatOrder(id, order).subscribe(
      response => console.log(response)
    )
    this.router.navigate(['myorder'])
  }

}
