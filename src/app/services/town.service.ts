import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Town } from '../models/town';
import { Global } from './global';

@Injectable()
export class TownService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	getTown(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'town/'+id, { headers: headers });

	}

	saveTown(town: Town): Observable<any>{
		let params = JSON.stringify(town);
		console.log(params);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'town', params, {headers: headers});
	}

	updateTown(town): Observable<any>{
		let params = JSON.stringify(town);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'town/'+town._id, params, { headers: headers });

	}

	deleteTown(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'town/'+id, { headers: headers });

	}

	getTowns(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		//return this._http.get(this.url+'towns-filtered', { headers: headers });
		return this._http.get(this.url+'towns', { headers: headers });
	}

	loadTowns(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'initial-data', { headers: headers });
	}

	deleteTowns(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'remove-all', { headers: headers });
	}

	getMostPopulated(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'towns-most-populated', { headers: headers });
	}


}