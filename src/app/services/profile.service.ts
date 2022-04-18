import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'd403f0eb1c532592d63e'; 
  private clientsecret = '909ba87537ba6eb205d04fa5dc35e71e5dd6cc1e';
  
  constructor(private http: HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'anneyk';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }
  updateProfile(username:string){
  	this.username = username;
  }

}
