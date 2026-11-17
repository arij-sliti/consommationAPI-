import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class ApiService {
    constructor( private httpClient: HttpClient) {}
  
    allapi() {
        
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
        let headersaa = new HttpHeaders();
        headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
        headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

        
          return  this.httpClient.get(CONFIG.URL + "api/afficher",{headers:headersaa })}
         ;
         
    ajouterstructure(users:any) {
        
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
      let headersaa = new HttpHeaders();
      headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
      headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

      
        return  this.httpClient.post(CONFIG.URL + "structure/addadmin?profil=Admin",users,{headers:headersaa })}
       ;
   
        /* ajouttest(connexion:any) {
          return this.httpClient.post(`${CONFIG.URL}  `, connexion,{responseType: 'text' })};
      */
        }