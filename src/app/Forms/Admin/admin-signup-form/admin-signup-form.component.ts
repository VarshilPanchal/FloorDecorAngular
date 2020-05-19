import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Admin } from '../../model/Admin.model';
import { AdminHttpService } from 'src/app/Services/admin-http.service';

@Component({
  selector: 'app-admin-signup-form',
  templateUrl: './admin-signup-form.component.html',
  styleUrls: ['./admin-signup-form.component.css']
})
export class AdminSignupFormComponent implements OnInit {

  admin: Admin
  submitted = false;

  constructor(private adminservice: AdminHttpService) {
    this.admin = new Admin();
  }

  @ViewChild('Aform') adminForm: NgForm;
  // userData: Admin;
  genders = ['male', 'female'];

  ngOnInit(): void {

  }



  onSubmit() {
    this.submitted = true
    this.adminservice.registrAdmin(this.admin).subscribe(result => console.log("register success" + result, this.admin));
  }


  get f() {
    return this.adminForm.controls;
  }
}
