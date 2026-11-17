import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class HebergeurService {
    constructor( private http:HttpClient) {}
  
    
    hebergeur(id:any) {
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
      
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
            
          return  this.http.get(CONFIG.URL +  "api/hebergeurbyid?id="+id,{headers:headers})
         }
   
  }