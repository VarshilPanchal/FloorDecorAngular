import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { User } from '../../model/User.model';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/services/token/token-storage-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // @ViewChild('Aform') loginForm: NgForm;
  userloginForm: FormGroup;
  submitted: boolean = false;
  loginField: User;
  // islogin: boolean = false;
  user:User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username = "";
  password = "";
  check: any;
  checkError: any = false;
  form:any={};

  constructor( private tokenStorage: TokenStorageServiceService,private userServices: HttpservicesService, private formbuilder: FormBuilder, private router: Router) {

    this.userloginForm = formbuilder.group({
      usernames: [null, Validators.required],
      passwords: [null, Validators.required],

    })
  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  
  get f() {
    return this.userloginForm.controls;
  }

  authenticateData() {
    this.submitted=true
    this.userServices.login(this.form).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveRole(data.roles);
        localStorage.setItem('Username', this.form.username);
        // localStorage.setItem('id', this.form);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.tokenStorage.reloadpage();
       
        alert("signed in successfully let's get buy product");
        this.router.navigate(['product/productlist']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // reloadPage() {
  //   window.location.reload();
  // }
}
