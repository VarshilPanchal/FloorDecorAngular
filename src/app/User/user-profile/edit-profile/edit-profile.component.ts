import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Forms/model/User.model';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: number;
  user: User;
  userPassword: User;
  editPassword = false;
  editUserDetail = true;

  constructor(private userHttpService: HttpservicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.getUserDetail(this.id)
  }
  getUserDetail(id) {
    this.userHttpService.userDetailById(id).subscribe(
      data => this.user = data
    )
  }
  updateData() {
    this.userHttpService.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['userprofile']);
      }
    )
  }

  updatePassword() {

    this.userHttpService.updatePassword(this.id, this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['userprofile'])

      }
    )
  }

  changePassword() {
    this.editPassword = true;
  }

}
