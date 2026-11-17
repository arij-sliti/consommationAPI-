import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class UtilisateurService {
    constructor( private httpClient: HttpClient) {}
  
    allutilisateur() {
        
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
        let headersaa = new HttpHeaders();
        headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
        headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

        
          return  this.httpClient.get(CONFIG.URL + "users/GetAllUser",{headers:headersaa })} ;
          structurebyemail(email:any) {
        
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
            let headersaa = new HttpHeaders();
            headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
            headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
    
            
              return  this.httpClient.get(CONFIG.URL + "structure/structurebyemail?email="+email,{headers:headersaa })} ;
              
              GetUserbyid(id:any) {
        
                const user = JSON.parse(localStorage.getItem('User')|| '{}');
                let headersaa = new HttpHeaders();
                headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
                headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
        
                
                  return  this.httpClient.get(CONFIG.URL + "users/GetUserbyid?id="+id,{})} ;
          archiver(email:any) {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                
              return  this.httpClient.post(CONFIG.URL +  "users/archiver?email="+email,{})
             }
             update(id:any ,nom:any , prenom:any,email:any) {
              const user = JSON.parse(localStorage.getItem('User')|| '{}');
            
                  let headers = new HttpHeaders();
                  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                  headers = headers.set("Authorization", 'Bearer ' + user.token);
                  
                return  this.httpClient.put(CONFIG.URL +  "users/updateuser?id="+id+"&nom="+nom+"&prenom="+prenom+"&email="+email,{})
               }
            
    ajout(users:any) {
      return  this.httpClient.post(CONFIG.URL +  "users/add",users)
     }
   
        }