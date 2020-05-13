import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Forms/model/User.model';
import { HttpservicesService } from 'src/app/Services/httpservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: number;
  user:User;
  
  constructor(private userHttpService: HttpservicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userHttpService.userDetailById(this.id).subscribe(
      data => this.user = data
    )

  }
  updateData() {
    this.userHttpService.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data)
        // this.router.navigate(['dashboard'])
      }
    )
  }

  // updateData(updateForm){
  // }
}