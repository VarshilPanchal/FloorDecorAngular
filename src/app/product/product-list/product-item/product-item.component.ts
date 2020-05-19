import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/Forms/model/Product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() product :Product;
 @Input() index:number; 
//  @Output() productSelected = new EventEmitter<void>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  

  // getDetail(){
  //   this.productSelected.emit();

  // }
}
