import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Forms/model/Product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[];
  constructor(private producthttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.producthttpService.findAllProduct().subscribe(data => this.products = data);
  }

  // onProductSelected(product: Product) {

  //   this.productWasSelected.emit(product);
  // }


}
