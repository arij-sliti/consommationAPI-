import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class DemandeService {
    constructor( private http:HttpClient) {}

    ajoutdeamnde(id:any,email:any,nom:any,prenom:any,email2:any,tel:any,mode:any,cadreutilisation:any) {
          const user = JSON.parse(localStorage.getItem('User')|| '{}');
        
              let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
            return  this.http.post(CONFIG.URL +  "api/demande?api="+id+"&email="+email+"&nom="+nom+"&prenom="+prenom+
            "&email2="+email2+"&tel="+tel+"&mode="+mode+"&cadreutilisation="+cadreutilisation,{headers:headers})
           }
           url(id:any,url:any) {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
              return  this.http.post(CONFIG.URL +  "demande/url?id="+id+"&url="+url,{})
             }
          lisedeamndeencours() {
            const user = JSON.parse(localStorage.getItem('User')|| '{}');
          
                let headers = new HttpHeaders();
                headers.set("Access-Control-Allow-Origin", "*")
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
              return  this.http.get(CONFIG.URL +  "api/listdemandeencours?email="+localStorage.getItem("Email"),{headers:headers})
             }
             lisedeamndeencoursuser() {
              const user = JSON.parse(localStorage.getItem('User')|| '{}');
            
                  let headers = new HttpHeaders();
                  headers.set("Access-Control-Allow-Origin", "*")
                  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                  headers = headers.set("Authorization", 'Bearer ' + user.token);
                return  this.http.get(CONFIG.URL +  "api/listdemandeencoursuser?email="+localStorage.getItem("Email"),{headers:headers})
               }


             lisedeamnde() {
                const user = JSON.parse(localStorage.getItem('User')|| '{}');
              
                    let headers = new HttpHeaders();
                    headers.set("Access-Control-Allow-Origin", "*")
                    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                    headers = headers.set("Authorization", 'Bearer ' + user.token);
                  return  this.http.get(CONFIG.URL +  "api/listtousdemande?email="+localStorage.getItem("Email"),{headers:headers})
                 }
    
                 lisedeamndevalidateur() {
                  const user = JSON.parse(localStorage.getItem('User')|| '{}');
                
                      let headers = new HttpHeaders();
                      headers.set("Access-Control-Allow-Origin", "*")
                      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                      headers = headers.set("Authorization", 'Bearer ' + user.token);
                    return  this.http.get(CONFIG.URL +  "api/demandevalidateur1?email="+localStorage.getItem("Email"),{headers:headers})
                   }


                   listtousdemande() {
                      return  this.http.get(CONFIG.URL +  "api/listtousdemande?email="+localStorage.getItem("Email"),{})
                     }
                   demandebyid(id:any) {
                    const user = JSON.parse(localStorage.getItem('User')|| '{}');
                  
                        let headers = new HttpHeaders();
                        headers.set("Access-Control-Allow-Origin", "*")
                        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                        headers = headers.set("Authorization", 'Bearer ' + user.token);
                      return  this.http.get(CONFIG.URL +  "demande/demandebyid?id="+id,{headers:headers})
                     }

                     rectifierrep(id:any,cadreutilisation:any,mode:any) {
                      const user = JSON.parse(localStorage.getItem('User')|| '{}');
                    
                          let headers = new HttpHeaders();
                          headers.set("Access-Control-Allow-Origin", "*")
                          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                          headers = headers.set("Authorization", 'Bearer ' + user.token);
                        return  this.http.post(CONFIG.URL +  "api/rectifierrep?id="+id+"&cadreutilisation="+cadreutilisation+"&mode="+mode,{})
                       }
                   lisedeamndevalidateur2() {
                    const user = JSON.parse(localStorage.getItem('User')|| '{}');
                  
                        let headers = new HttpHeaders();
                        headers.set("Access-Control-Allow-Origin", "*")
                        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                        headers = headers.set("Authorization", 'Bearer ' + user.token);
                      return  this.http.get(CONFIG.URL +  "demande/demandevalidateur2?email="+localStorage.getItem("Email"),{headers:headers})
                     }
                     demandevalidateuracceper2() {
                      const user = JSON.parse(localStorage.getItem('User')|| '{}');
                    
                          let headers = new HttpHeaders();
                          headers.set("Access-Control-Allow-Origin", "*")
                          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                          headers = headers.set("Authorization", 'Bearer ' + user.token);
                        return  this.http.get(CONFIG.URL +  "demande/demandevalidateuracceper2?email="+localStorage.getItem("Email"),{})
                       }
             
             statusdemande(id:any) {
                const user = JSON.parse(localStorage.getItem('User')|| '{}');
              
                    let headers = new HttpHeaders();
                    headers.set("Access-Control-Allow-Origin", "*")
                    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                    headers = headers.set("Authorization", 'Bearer ' + user.token);
                  return  this.http.post(CONFIG.URL +"api/accepter?id="+id,{headers:headers})
                 }
                 status(id:any,status:any) {
                    const user = JSON.parse(localStorage.getItem('User')|| '{}');
                  
                        let headers = new HttpHeaders();
                        headers.set("Access-Control-Allow-Origin", "*")
                        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                        headers = headers.set("Authorization", 'Bearer ' + user.token);
                      return  this.http.post(CONFIG.URL +"api/status?id="+id+"&status="+status,{headers:headers})
                     }

                     status2(id:any,status:any,refus:any) {
                      const user = JSON.parse(localStorage.getItem('User')|| '{}');
                    
                          let headers = new HttpHeaders();
                          headers.set("Access-Control-Allow-Origin", "*")
                          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                          headers = headers.set("Authorization", 'Bearer ' + user.token);
                        return  this.http.post(CONFIG.URL +"api/status2?id="+id+"&status="+status+"&refu="+refus,{headers:headers})
                       }


                     refuser(id:any,status:any) {
                      const user = JSON.parse(localStorage.getItem('User')|| '{}');
                    
                          let headers = new HttpHeaders();
                          headers.set("Access-Control-Allow-Origin", "*")
                          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                          headers = headers.set("Authorization", 'Bearer ' + user.token);
                        return  this.http.post(CONFIG.URL +"api/refuser?id="+id+"&email="+localStorage.getItem("Email"),{headers:headers})
                       }
                     rectifier(id:any,rectifier:any) {
                      const user = JSON.parse(localStorage.getItem('User')|| '{}');
                    
                          let headers = new HttpHeaders();
                          headers.set("Access-Control-Allow-Origin", "*")
                          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                          headers = headers.set("Authorization", 'Bearer ' + user.token);
                        return  this.http.post(CONFIG.URL +"api/rectifier?id="+id+"&rectifier="+rectifier,{})
                       }
                 
                }