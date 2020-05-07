import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { User } from '../../UserRegistrationField';
import { HttpClientModule } from '@angular/common/http';
import { HttpservicesService } from 'src/app/Services/httpservices.service';
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

  constructor(
    private userRegistrationServices: HttpservicesService,
    private formbuilder: FormBuilder,
    private router: Router) {

    this.userregistrationForm = formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
    this.registrationfield = {
      id: null,
      username: '',
      email: '',
      password: '',
      // activeflag: false,
      // orders: 0,
      // approvedOrders: 0,
      // rejectedOrders: 0
    }

  }
  get f() {
    return this.userregistrationForm.controls;
  }

  ngOnInit(): void {
  }

  PostData(userregistrationForm) {
    this.submitted = true

    if (this.userregistrationForm.valid) {
      this.registrationfield.username = this.userregistrationForm.get('username').value;
      this.registrationfield.email = this.userregistrationForm.get('email').value;
      this.registrationfield.password = this.userregistrationForm.get('password').value;
      this.userRegistrationServices.registrationOfUser(this.registrationfield).subscribe(userregistrationForm => {
        console.log('register success', userregistrationForm);
        this.gotoUserList();
      }, error => {
        console.log(error)
        console.log(userregistrationForm);
      })

    } else {
      alert('password not match');
    }


  }
  gotoUserList() {
    this.router.navigate(['/userslist']);
  }

}
