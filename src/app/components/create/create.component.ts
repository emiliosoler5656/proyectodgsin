import { Component, OnInit } from '@angular/core';
import { Town } from '../../models/Town';
import { TownService } from '../../services/town.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [TownService]
})
export class CreateComponent implements OnInit {

	public title: string;
	public town: Town;
	public save_town;
	public status;

  constructor(
  		private _townService: TownService
  	){
  		this.title = "Añadir una nueva Población"
  		this.town = new Town ('','','','', 0, 0, 0, 0, 0, 2018);
  }

  ngOnInit() {

  }

  onSubmit(form){
  	// Guardamos los datos de la población, recogidos en el formulario
  	this._townService.saveTown(this.town).subscribe(
  		response => {
                    this.save_town = response.town;
                    this.status = "success";
                    form.reset();
  		            },
  		error =>    {
  			             console.log(<any>error);
                     this.status = "failed";
  		            }
  		);
  }

}
