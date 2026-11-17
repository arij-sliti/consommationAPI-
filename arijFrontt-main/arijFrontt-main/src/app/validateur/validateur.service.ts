import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class ValidateurService {
    constructor( private http:HttpClient) {}
   
    structurebyid(id:any){
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      
    return  this.http.get(CONFIG.URL +  "structure/structurebyid?id="+id,{headers:headers})

    }



    update(id:any,nom:any,prenom:any,email:any){
      const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      
    return  this.http.put(CONFIG.URL +  "structure/update?id="+id+"&nom="+nom+"&prenom="+prenom+"&email="+email,{})

    }


    listvalidateurbyemail() {
        const user = JSON.parse(localStorage.getItem('User')|| '{}');
      
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
            
          return  this.http.get(CONFIG.URL +  "structure/validateurbyemail?email="+localStorage.getItem("Email"),{headers:headers})
         }

         ajoutvalidateurbyemail(validateur:any,profil:any) {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                
              return  this.http.post(CONFIG.URL +  "structure/addValidateur?profil="+profil+"&email="+localStorage.getItem("Email"),validateur,{headers:headers , responseType: 'text'})
             }
             archiver(id:any) {
              const user = JSON.parse(localStorage.getItem('User')|| '{}');
            
                  let headers = new HttpHeaders();
                  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                  headers = headers.set("Authorization", 'Bearer ' + user.token);
                  
                return  this.http.post(CONFIG.URL +  "structure/archiver?id="+id,{})
               }
           
  }