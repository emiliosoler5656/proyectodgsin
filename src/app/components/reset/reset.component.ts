import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/Town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  providers: [TownService]
})

export class ResetComponent implements OnInit {

  public title: string;
  public town: Town;
  public deleteStatus: string;
  public loadStatus: string;
  public url: string;

  constructor(

  	private _townService: TownService,
  	private _route: ActivatedRoute,
  	private _router: Router

  	){
  		this.title = "Resetear la colección de Poblaciones";
  		this.url = Global.url;
  }

  ngOnInit() {
  			
  		}

  resetTowns(){
  	this._townService.deleteTowns().subscribe(
  		response => {
        console.log("Colección borrada correctamente");
  			this._townService.loadTowns().subscribe(
          response => {
            console.log("Datos iniciales cargados correctamente");
            this.loadStatus = "ok";
            },
          error => {
            console.log(<any>error);
            console.log("No se han podido cargar los datos iniciales");
            this.loadStatus = "error";
            });
  		},
  		error => {
  			console.log(<any>error);
  			this.loadStatus = "error";
  		}
  	);
  }
}