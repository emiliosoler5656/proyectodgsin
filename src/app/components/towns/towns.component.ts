import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.component.html',
  styleUrls: ['./towns.component.css'],
  providers: [TownService]
})
export class TownsComponent implements OnInit {

  public towns: Town[];
  public url: string;

  constructor(
  	private _townService: TownService
  	) {

  	this.url = Global.url;
  }

  ngOnInit() {

  	this.getTowns();
  }

  getTowns(){
  	this._townService.getTowns().subscribe(
  		response => {
  			console.log(response);
  			if(response.towns){
  				this.towns = response.towns;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}

  		);
  }

}
