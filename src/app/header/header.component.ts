import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../Services/httpservices.service';
import { TokenStorageServiceService } from '../services/token/token-storage-service.service';
import { User } from '../Forms/model/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn=false;
  user:User[];

  constructor(public userHttpService: HttpservicesService , private tokenStorageService:TokenStorageServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  }

  
}
