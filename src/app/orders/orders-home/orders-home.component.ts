import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css']
})
export class OrdersHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buyProduct(){

    this.router.navigate(['product/productlist'])

  }

}
