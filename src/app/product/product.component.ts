import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpservicesService } from '../services/httpservices.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  showAdminBoard: boolean;
  constructor(private router: Router, private route: ActivatedRoute,public loginService: HttpservicesService) { }

  ngOnInit(): void {
  }

  onNewProduct() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
