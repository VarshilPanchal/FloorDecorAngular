import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../services/httpservices.service';
import { TokenStorageServiceService } from '../services/token/token-storage-service.service';
import { User } from '../Forms/model/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  user:User[];

  constructor(public userHttpService: HttpservicesService , public tokenStorageService:TokenStorageServiceService) { 

   }

  ngOnInit(): void {

  }

  logout(){
    this.tokenStorageService.signOut();
  }
  
}
