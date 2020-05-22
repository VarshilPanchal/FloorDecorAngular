import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './Forms/User/login-form/login-form.component';
import { SignupFormComponent } from './Forms/User/signup-form/signup-form.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditProfileComponent } from './user/user-profile/edit-profile/edit-profile.component';
import { LogoutComponent } from './forms/user/logout/logout.component';
import { NewProductComponent } from './forms/product/new-product/new-product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {  authInterceptorProviders } from './interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderDetailFormComponent } from './orders/order-detail-form/order-detail-form.component';
import { MyOrderComponent } from './orders/my-order/my-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserListComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductComponent,
    ProductHomeComponent,
    UserProfileComponent,
    EditProfileComponent,
    LogoutComponent,
    NewProductComponent,
    ProductEditComponent,
    OrderDetailFormComponent,
    MyOrderComponent,
    OrderListComponent,
    DoughnutChartComponent,
    EditOrderComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ChartsModule
  
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
