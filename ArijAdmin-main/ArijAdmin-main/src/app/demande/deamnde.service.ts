import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class DemandeService {
    constructor( private httpClient: HttpClient) {}
  
    Demandebyref(ref:any) {
        
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
        let headersaa = new HttpHeaders();
        headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
        headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

        
          return  this.httpClient.get(CONFIG.URL + "demande/demandebyreference?ref="+ref,{})} ;


     
        }