import { Component, OnInit } from '@angular/core';
import { textdata, sampleData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];

  ngOnInit(): void {
    this.data = textdata; //Uncomment for Row, Column template sample data
    //this.data = sampleData; //Uncomment for Column Condition template, Column-ValueAccessor sample data
  }
}
