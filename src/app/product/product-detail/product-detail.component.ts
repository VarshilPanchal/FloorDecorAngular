import { Component, OnInit, Input } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { Product } from 'src/app/Forms/model/Product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;


  id: any;
  constructor(private producthttpService: ProductHttpService, private route: ActivatedRoute, private router: Router, public loginService: HttpservicesService) { }

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

  placeOrder(id) {
    this.router.navigate(['placeorder/' + id]);
    console.log("order place " + id)
  }

  editProduct(id, product) {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  changeStatus(id, activeFlag) {
    if (status) {
      this.producthttpService.changeStatus(id, 1).subscribe(data => console.log(data));
    } else {
      this.producthttpService.changeStatus(id, 0).subscribe(data => console.log(data));

    }
    this.getProductById(id);
  }

}
