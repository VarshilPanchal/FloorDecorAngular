import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Forms/model/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // selectedItem:Product;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  // selectedItem($event){

  //   console.log($event);

  // }

  onNewProduct() {
    this.router.navigate(['new'] ,{ relativeTo: this.route })
  }
}
