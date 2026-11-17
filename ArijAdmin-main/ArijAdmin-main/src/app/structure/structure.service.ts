import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class StructureService {
    constructor( private httpClient: HttpClient) {}
  
    allstructure() {
        
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
        let headersaa = new HttpHeaders();
        headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
        headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

        
          return  this.httpClient.get(CONFIG.URL + "structure/allstructure",{headers:headersaa })}
         ;
         archiver(id:any) {
          const user = JSON.parse(localStorage.getItem('User')|| '{}');
        
              let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
              
            return  this.httpClient.post(CONFIG.URL +  "structure/archiver?id="+id,{})
           }
    ajouterstructure(users:any,profil:any) {
        
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
      let headersaa = new HttpHeaders();
      headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
      headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);

      
        return  this.httpClient.post(CONFIG.URL + "structure/addadmin?profil="+profil,users,{headers:headersaa })} ;
       structurebyid(id:any) {
        
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
        let headersaa = new HttpHeaders();
        headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
        headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
  
        return  this.httpClient.get(CONFIG.URL + "structure/structurebyid?id="+id,{headers:headersaa })};
     
        modifier(structure:any ,id:any) {
        
          const user = JSON.parse(localStorage.getItem('User')|| '{}');
          let headersaa = new HttpHeaders();
          headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
          headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
    
          return  this.httpClient.post(CONFIG.URL + "structure/modifier?id="+id,structure,{headers:headersaa })};
       
  
          nbrutilisateur() {
        
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
            let headersaa = new HttpHeaders();
            headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
            headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
      
            return  this.httpClient.get(CONFIG.URL + "structure/nbrutilisateur",{headers:headersaa })};
         
            nbradmin() {
        
              const user = JSON.parse(localStorage.getItem('User')|| '{}');
              let headersaa = new HttpHeaders();
              headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
              headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
        
              return  this.httpClient.get(CONFIG.URL + "structure/nbradmin",{headers:headersaa })};
           
              nbrvalidateur() {
        
                const user = JSON.parse(localStorage.getItem('User')|| '{}');
                let headersaa = new HttpHeaders();
                headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
                headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
          
                return  this.httpClient.get(CONFIG.URL + "structure/nbrvalidateur",{headers:headersaa })};
             
           
                nbdataowner() {
        
                  const user = JSON.parse(localStorage.getItem('User')|| '{}');
                  let headersaa = new HttpHeaders();
                  headersaa = headersaa.set('Content-Type', 'application/json; charset=utf-8');
                  headersaa = headersaa.set("Authorization", 'Bearer ' + user.token);
            
                  return  this.httpClient.get(CONFIG.URL + "structure/nbrdataowner",{headers:headersaa })};
               
                
                
        }