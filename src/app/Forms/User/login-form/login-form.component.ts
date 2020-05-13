import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { User } from '../../model/User.model';
import { HttpservicesService } from 'src/app/Services/httpservices.service';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/services/token/token-storage-service.service';
import { AuthInterceptorService } from 'src/app/services/interceptor/auth-interceptor.service';


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

  constructor(private authService: AuthInterceptorService, private tokenStorage: TokenStorageServiceService,private userServices: HttpservicesService, private formbuilder: FormBuilder, private router: Router) {

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
        localStorage.setItem('Username', this.form.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    //   data => {
    //     console.log(data);
    //     this.check = data;
    //     if (this.check == true) {
    //       localStorage.setItem('Username', this.username);
    //       sessionStorage.setItem('AUTHENTICATED_USER', this.username);
    //       this.router.navigate(['home']);
    //     } else {
    //       this.checkError = true;
    //     }

    //   },
    //   error => {
    //     console.log(error)
    //   }
    // );
  }


 
  reloadPage() {
    window.location.reload();
  }
}