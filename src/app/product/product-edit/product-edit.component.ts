import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { Product } from 'src/app/Forms/model/Product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productRegistration: FormGroup;
  submitted: boolean = false;
  product: Product;
  id: number;
  productname;
  editMode = false;

  constructor(private route: ActivatedRoute, private productHttpService: ProductHttpService, private formbuilder: FormBuilder,
    private router: Router) {

    this.productRegistration = formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', [Validators.required]],
      prize: ['', Validators.required],
      productDetail: ['', Validators.required],

    })
    this.product = {
      id: null,
      name: '',
      image: '',
      productDetail: '',
      prize: null,
      activeflag:false,
    }
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.product = new Product();
        this.productHttpService.findProductById(this.id).subscribe(
          data => this.product = data)
        // this.editMode = params['id'] != null;
        // console.log(this.editMode);

      }
    );
  }

  updateProduct() {

    this.submitted = true
    this.productHttpService.updateProduct(this.id, this.product).subscribe(
      data => {
        console.log(data)
         this.router.navigate(['../'],{relativeTo: this.route})
      }
    )

  }

}
