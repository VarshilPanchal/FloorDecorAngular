import { Component, OnInit, Input } from '@angular/core';
import { ProductHttpService } from 'src/app/Services/product-http.service';
import { Product } from 'src/app/Forms/model/Product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;


  id: any;
  constructor(private producthttpService: ProductHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getProductById(this.id);
      }
    );
  }

  getProductById(id: number) {
    this.producthttpService.findProductById(id).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
        // this.router.navigate[this.id];
      }
    )
  }
  getOrder(name){
    console.log("order place "+ name)
  }
  
}
