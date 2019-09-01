import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/Town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [TownService]
})
export class ChartsComponent implements OnInit {
	
	public title: string;
	public type: string;
	public data: any;
	public columnNames: any;
	public options: any;
	public width: number;
	public height: number;
  public myData = [];

  constructor(
  		private _townService: TownService
  	){

  }

  ngOnInit() {

    this.loadChart();
  	
  }

  loadChart() {

    var datos = [['',0]];
    this.data = [['demo',0]];
    this.title = '10 Most populated towns in Andalucía, 2018';
    this.type='ColumnChart';

    this._townService.getMostPopulated().subscribe(
      response => {
        if(response.towns){
          response.towns.forEach( function (el, index){
              datos[index] = [el.name,el.population];
            });
            this.data = datos;
          console.log(this.data);
        }
      },
      error => {
        console.log(<any>error);
      }

      );
          //this.data = datos;
          this.columnNames = ['Town', 'Population (2018)'];
          this.options = {};
          this.width = 600;
          this.height = 400;      
  }
}
