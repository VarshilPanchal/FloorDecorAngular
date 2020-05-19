import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userHttpService: HttpservicesService) { }

  ngOnInit(): void {

    this.userHttpService.logout();
  }
  reloadPage() {
    window.location.reload();
  }
}
