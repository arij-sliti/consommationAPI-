import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class ApiService {
    constructor( private http:HttpClient) {}
    apibyid(id:any) {
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
    
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          
        return  this.http.get(CONFIG.URL +  "api/afficherbyid?id="+id,{headers:headers})
       }

       
    
    listapi() {
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
      
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
            
          return  this.http.get(CONFIG.URL +  "api/afficher",{headers:headers})
         }
         listapibyemail() {
          const user = JSON.parse(localStorage.getItem('User')|| '{}');
        
              let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
              
            return  this.http.get(CONFIG.URL +  "api/listeapibyemail?email="+localStorage.getItem("Email"),{headers:headers})
           }

    ajoutapi(api:any) {
          const user = JSON.parse(localStorage.getItem('User')|| '{}');
        
              let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
              
            return  this.http.post(CONFIG.URL +  "api/ajouter?email="+localStorage.getItem('Email'),api,{headers:headers})
           }
    
    
           updateapi(id:any,input:any,output:any,nom:any,description:any) {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                
              return  this.http.put(CONFIG.URL +  "api/update?id="+id+"&input="+input+"&output="+output+"&nom="+nom+"&description="+description,{})
             }
      
    
           afficherbyid(id:any) {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                
              return  this.http.get(CONFIG.URL +  "api/afficherbyid?id="+id,{headers:headers})
             }
           
    archiver(id:any) {
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
    
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          
        return  this.http.put(CONFIG.URL +  "api/archiver?id="+id,{})
       }
           demandebyemail () {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                
              return  this.http.get(CONFIG.URL +  "api/demandebyemail?email="+localStorage.getItem('Email'),{headers:headers})
             }
             supprimer (id:any) {
              const user = JSON.parse(localStorage.getItem('User')|| '{}');
            
                  let headers = new HttpHeaders();
                  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                  headers = headers.set("Authorization", 'Bearer ' + user.token);
                  
                return  this.http.delete(CONFIG.URL +  "demande/supprmier?id="+id,{})
               }
           
  }