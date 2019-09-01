import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/Town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [TownService]

})
export class EditComponent implements OnInit {

  public title: string;
  public town: Town;
  public save_town;
  public status: string;
  public url: string;

  constructor(

  	private _townService: TownService,
  	private _route: ActivatedRoute,
  	private _router: Router

  	){
  		this.title = "Modificar una Población";
  		this.url = Global.url;
  }

  ngOnInit() {

  		this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getTown(id);
  		});
  }

  getTown(id){
  	this._townService.getTown(id).subscribe(
  		response => {
  			console.log(response.town);
  			this.town = response.town;
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  }

  onSubmit(){
  	this._townService.updateTown(this.town).subscribe(
  		response => {
  			if(response.town){
  					this.save_town = response.town;
  					this.status = 'success';			
  			}else{
  				this.status = "failed";
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}

  	);
  }

}
