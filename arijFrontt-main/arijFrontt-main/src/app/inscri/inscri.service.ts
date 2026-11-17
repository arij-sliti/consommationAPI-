import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class InscriService {
    constructor( private http:HttpClient) {}
  
    
    ajout(users:any) {
          return  this.http.post(CONFIG.URL +  "users/add",users)
         }
   
  }