import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/Services/product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private producthttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.producthttpService.findAllUser();
  }

}
