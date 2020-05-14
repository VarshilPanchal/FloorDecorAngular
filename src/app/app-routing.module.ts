import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './Forms/User/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { AdminSignupFormComponent } from './Forms/Admin/admin-signup-form/admin-signup-form.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { LoginFormComponent } from './Forms/User/login-form/login-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditProfileComponent } from './user/user-profile/edit-profile/edit-profile.component';
import { LogoutComponent } from './forms/user/logout/logout.component';
import { NewProductComponent } from './forms/product/new-product/new-product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product', component: ProductComponent, children: [

      { path: '', component: ProductHomeComponent },
      { path: 'productlist', component: ProductListComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'productlist/:id', component: ProductDetailComponent },
      { path: 'productlist/:id/edit', component: ProductEditComponent }

    ]
  },
  { path: 'home', component: HomeComponent, },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'login', component: LoginFormComponent, },
  { path: 'signup', component: SignupFormComponent },
  { path: 'logout', component: LogoutComponent, },
  {
    path: 'userslist', component: UserListComponent, children: [

      { path: ':active', component: UserListComponent },
      { path: ':inactive', component: UserListComponent }
    ]
  },

  {
    path: 'userprofile', component: UserProfileComponent, children: [

    ]
  },
  { path: 'editprofile/:id', component: EditProfileComponent, },

  // {
  //   path: 'productlist', component: ProductListComponent,
  // },
  // {
  //   path: 'productdetail', component: ProductDetailComponent,
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
