import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Forms/model/Product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListFilter } from 'src/app/User/user-list/userList';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlist: FormGroup;
  uri: string;
  activeproductlist = false;
  inActiveproductlist = false;
  list: any;
  productlistFilter: UserListFilter;
  // @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[];
  constructor(private producthttpService: ProductHttpService, private formBuilder: FormBuilder) {
    this.productlist = formBuilder.group({
      list: [null]
    })
    this.productlistFilter = {
      userlist: ''
    }
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.producthttpService.findAllProduct().subscribe(data => this.products = data);
  }

  getActiveproductlist() {
    this.producthttpService.findAllActiveProduct().subscribe(data => this.products = data);
  }

  getInactiveproductlist() {
    this.producthttpService.findAllInactiveProduct().subscribe(data => this.products = data);
  }

  // onProductSelected(product: Product) {

  //   this.productWasSelected.emit(product);
  // }
  onSubmit() {
    if (this.productlist.get('list').value == "All Product") {
      this.getProductList();
    } else if (this.productlist.get('list').value == "Active Product") {
      this.getActiveproductlist();

    } else if (this.productlist.get('list').value == "Inactive Product") {
      this.getInactiveproductlist();
    }
  }

  

}
