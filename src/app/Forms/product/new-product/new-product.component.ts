import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { Product } from '../../model/Product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productRegistration: FormGroup;
  submitted: boolean = false;
  product: Product;

  constructor(private productHttpService: ProductHttpService,
    private formbuilder: FormBuilder,
    private router: Router,
      private route: ActivatedRoute) {

    this.productRegistration = formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      prize: ['', Validators.required],
      productDetail: ['', Validators.required],

    })
    this.product = {
      id: null,
      name: '',
      image: '',
      productDetail: '',
      prize: null,
    }

  }

  ngOnInit(): void {
  }

  saveProduct(productRegistration) {

    this.submitted = true

    // if (this.productRegistration.valid) {
    this.product.id = this.productRegistration.get('id').value;
    this.product.name = this.productRegistration.get('name').value;
    this.product.image = this.productRegistration.get('image').value;
    this.product.prize = this.productRegistration.get('prize').value;
    this.product.productDetail = this.productRegistration.get('productDetail').value;
    this.productHttpService.registrationOfProduct(this.product).subscribe(productRegistration => {
      console.log('register success', productRegistration);
      this.router.navigate(['../'],{relativeTo: this.route})
      // this.gotoLoginPage();
    }, error => {
      console.log(error)
      console.log(productRegistration);
    })

    // } else {
    //   alert('product not saved');
    // }

  }
}
