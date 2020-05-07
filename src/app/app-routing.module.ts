import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './Forms/User/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { AdminSignupFormComponent } from './Forms/Admin/admin-signup-form/admin-signup-form.component';
import { UserListComponent } from './User/user-list/user-list.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'admin/signup', component: AdminSignupFormComponent,
  },
  {
    path: 'signup', component: SignupFormComponent
  },
  {
    path: 'userslist', component: UserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
