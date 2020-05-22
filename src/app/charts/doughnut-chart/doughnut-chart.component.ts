import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { User } from 'src/app/Forms/model/User.model';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { Chartss } from './chart.model';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  ngOnInit(): void {
    this.getUsername();
  }

  user: User[];
  Chartss: Chartss[];
  username: User['username'];

  lineData :any =[];

  lineChartData: ChartDataSets[] = [
    { data: this.lineData, label: 'Order per User' },
  ];

  lineChartLabels: any =[]; //= ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };


  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private orderHttpService: OrderDetailService) { }

  public getUsername() {
    this.orderHttpService.getChartDetail().subscribe(response => {
      this.Chartss = response
      for (var key in this.Chartss) {
        this.lineChartLabels.push(key);
        this.lineData.push(this.Chartss[key])  ;
        
        console.log(this.lineChartLabels, this.Chartss[key]);
      }
      console.log(this.Chartss)
    });
  }


}