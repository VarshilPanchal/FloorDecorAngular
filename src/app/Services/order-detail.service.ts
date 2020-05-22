import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Forms/model/User.model';
import { OrderDetail } from '../forms/model/OrderDetail.model';
import { Observable } from 'rxjs';
import {  Chartss } from '../charts/doughnut-chart/chart.model';

const ORDER_API = "http://localhost:8080/api/order/"

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }

  public placeOrder(order: OrderDetail): Observable<OrderDetail> {

    return this.http.post<OrderDetail>(ORDER_API + "place", order);
  }

  public MyOrderDetailById(id: any) {
    return this.http.get<OrderDetail>(`${ORDER_API}` + 'myorder/' + `${id}`);
  }

  public getAllOrder() {
    return this.http.get<OrderDetail>(`${ORDER_API}` + 'list');
  }

  public getApprovedOrder() {
    return this.http.get<OrderDetail>(`${ORDER_API}` + 'approved/list');
  }

  public getRejectedOrder() {
    return this.http.get<OrderDetail>(`${ORDER_API}` + 'rejected/list');
  }

  public updatOrder(id: any, order: OrderDetail) {

    return this.http.put<OrderDetail>(`${ORDER_API}update/${id}`, order);
  }

  GetSingleOrderByID(id) {
    return this.http.get<OrderDetail>(`${ORDER_API}${id}`)
  }

  public getStatusChange(id, number) {
    return this.http.get<OrderDetail>(`${ORDER_API}statuschange/${id}/${number}`);
  }

  public deleteUser(id) {
    return this.http.delete(`${ORDER_API}delete/${id}`)
  }

  public getChartDetail(): Observable<Array<Chartss>> {
    return this.http.get<Array<Chartss>>(`${ORDER_API}charts`);
  }
  // getContractGatewaysList(): Observable<Array<ContractGatewaysList>> {
  //   return this.http.get<Array<ContractGatewaysList>>(environment.api.urls.contracts.getContractGateways);
  // }
}