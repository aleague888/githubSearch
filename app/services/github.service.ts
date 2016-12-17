import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username: string;
	private client_id = 'c5acabc014a26194e700';
	private client_secret = 'b4e9cabeeda96f8a505f348abdf712c861cfdeed';
	

	constructor(private _http: Http){
		console.log('Github service ready...');
		this.username = 'andrew8888';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id'+this.client_id+'&client_secret'+this.client_secret).map(res => res.json());
	}
		getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id'+this.client_id+'&client_secret'+this.client_secret).map(res => res.json());
	}
	updateUser(username:string){
		this.username = username;
	}

}