import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [TownService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public town: Town;
  public confirm: boolean;

  constructor(

  	private _townService: TownService,
  	private _router: Router,
  	private _route: ActivatedRoute

  	){

  	  this.url = Global.url;
      this.confirm = false;
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

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteTown(id){
  	this._townService.deleteTown(id).subscribe(
  		response => {
  			if(response.town){
          console.log("El registro ha sido eliminado correctamente");
  				this._router.navigate(['/towns']);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  }




}
