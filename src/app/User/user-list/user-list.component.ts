import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Forms/UserRegistrationField';
import { Router } from '@angular/router';
import { HttpservicesService } from 'src/app/Services/httpservices.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private route: Router, private httpService: HttpservicesService) { }

  ngOnInit(): void {
    this.refreceUserList();
    
  }

  refreceUserList(){
    this.httpService.findAllUser().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id) {
    console.log(`user ${id} discarded`)
    this.httpService.deleteUser(id).subscribe(data => {
     console.log(data);
     this.refreceUserList();
    });
  }

  updateUser(id){
    console.log(` user ${id} updated`)

  }
}
