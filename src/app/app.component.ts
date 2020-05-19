import { Component, Output } from '@angular/core';
import { TokenStorageServiceService } from './services/token/token-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FloorDecor';
  
  

  constructor(private tokenStorageService: TokenStorageServiceService) { }

  ngOnInit() {
    
  }
}
