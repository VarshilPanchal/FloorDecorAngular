import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../UserRegistrationField';
import { HttpservicesService } from 'src/app/Services/httpservices.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userloginForm: FormGroup;
  submitted: boolean = false;
  loginField: User;
  islogin: boolean = false;
  user:User;
  // loginForm: FormGroup;
  username = "";
  password = "";
  check: any;
  checkError: any = false;


  
  get f() {
    return this.userloginForm.controls;
  }

  authenticateData() {
    this.userServices.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.check = data;
        if (this.check == true) {
          localStorage.setItem('Username', this.username);
          sessionStorage.setItem('AUTHENTICATED_USER', this.username);
          this.router.navigate(['home']);
        } else {
          this.checkError = true;
        }

      },
      error => {
        console.log(error)
      }
    );
  }


  constructor(private userServices: HttpservicesService, private formbuilder: FormBuilder, private router: Router) {

    this.userloginForm = formbuilder.group({
      usernames: [null, Validators.required],
      passwords: [null, Validators.required],

    })
  }

  ngOnInit(): void {
  }

}
