import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Forms/UserRegistrationField';
import { ProductHttpService } from 'src/app/Services/product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[];
  constructor(private producthttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.producthttpService.findAllUser().subscribe(data => this.products=data );
  }

  

}
