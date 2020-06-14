import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lineChartData: ChartDataSets[] = [
   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tamales' },
   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Tortillas' },
   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Chorizo' }
  ];

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

  public lineChartOptions:any = {
    responsive: true
  }

  public lineChartColors: Color[] = [
   { // grey
     backgroundColor: 'rgba(148,159,177,0.2)',
     borderColor: 'rgba(148,159,177,1)',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   },
   { // dark grey
     backgroundColor: 'rgba(77,83,96,0.2)',
     borderColor: 'rgba(77,83,96,1)',
     pointBackgroundColor: 'rgba(77,83,96,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(77,83,96,1)'
   },
   { // red
     backgroundColor: 'rgba(255,0,0,0.3)',
     borderColor: 'red',
     pointBackgroundColor: 'rgba(148,159,177,1)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
   }
 ];

  public lineChartLegend = true;
  public lineChartType = 'line';

}
