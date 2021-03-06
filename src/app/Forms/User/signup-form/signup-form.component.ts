import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { User } from '../../model/User.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  userregistrationForm: FormGroup;
  submitted: boolean = false;
  registrationfield: User;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private userRegistrationServices: HttpservicesService,
    private formbuilder: FormBuilder,
    private router: Router) {

    this.userregistrationForm = formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      active: [false]

    })
    this.registrationfield = {
      id: null,
      username: '',
      email: '',
      password: '',
      active: false

    }

  }
  get f() {
    return this.userregistrationForm.controls;
  }

  ngOnInit(): void {
  }

  signup(userregistrationForm) {
    this.submitted = true

    if (this.userregistrationForm.valid) {
      this.registrationfield.username = this.userregistrationForm.get('username').value;
      this.registrationfield.email = this.userregistrationForm.get('email').value;
      this.registrationfield.password = this.userregistrationForm.get('password').value;
      this.registrationfield.active = this.userregistrationForm.get('active').value;
      this.userRegistrationServices.register(this.registrationfield).subscribe(userregistrationForm => {
        console.log(this.registrationfield.active);
        console.log('register success', userregistrationForm);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("You have successfully signed up")
        this.gotoLoginPage();
      }, error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      })

    } else {
      alert("sign up failed");
    }
  }

  gotoUserList() {
    this.router.navigate(['/userslist']);
  }
  gotoLoginPage() {
    this.router.navigate(['login']);
  }

}
