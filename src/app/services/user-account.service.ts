import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  private username!: string;
  private clientid= "d403f0eb1c532592d63e";
  private clientsecret= "909ba87537ba6eb205d04fa5dc35e71e5dd6cc1e";
  constructor(private http: Http) {
    console.log("Service is now ready");
    this.username = 'anneyk';
   }

   getUserAccountInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map((res: { json: () => any; }) => res.json());
   }
}
