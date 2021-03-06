import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Forms/model/User.model';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListFilter } from './userList';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: FormGroup;
  uri: string;
  activeUserList = false;
  inActiveUserList = false;
  list: any;
  userListFilter: UserListFilter;
  users: User[];



  constructor(private formbulder: FormBuilder, private router: Router, private httpService: HttpservicesService, private route: ActivatedRoute) {
    this.userlist = formbulder.group({
      list: [null]
    })
    this.userListFilter = {
      userlist: '',
    }
  }

  ngOnInit(): void {
    this.refreceUserList();
  }

  refreceUserList() {
    this.httpService.findAllUser().subscribe(data => {
      this.users = data;
      alert("total user" + data.length);

    });
  }

  getActiveUserlist() {
    this.httpService.getActiveUser().subscribe(data => {
      this.users = data;
      alert("total active user" + data.length);
    });
  }

  getInactiveUserlist() {
    this.httpService.getInactiveUser().subscribe(data => {
      this.users = data;
      alert("total inactive user" + data.length);

    });;
  }

  deleteUser(id) {
    console.log(`user ${id} discarded`)
    this.httpService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.refreceUserList();
    });
  }

  updateUser(id) {
    console.log(` user ${id} updated`);
    this.router.navigate(['editprofile', id]);

  }

  changeStatus(id, status) {
    if (status) {
      this.httpService.changeStatus(id, 1).subscribe(data => console.log(data));
    } else {
      this.httpService.changeStatus(id, 0).subscribe(data => console.log(data));

    }
    this.refreceUserList();

  }

  onSubmit() {
    if (this.userlist.get('list').value == "All") {
      this.refreceUserList();
    } else if (this.userlist.get('list').value == "active") {
      this.getActiveUserlist();

    } else if (this.userlist.get('list').value == "inactive") {
      this.getInactiveUserlist();
    }
  }
}
