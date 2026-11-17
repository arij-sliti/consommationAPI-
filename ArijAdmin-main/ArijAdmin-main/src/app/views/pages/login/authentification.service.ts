import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { User } from "./userconnexion";
import { CONFIG } from "../../../../environments/environment";

@Injectable({
    providedIn: "root",
  })
  
  export class connexionService{
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  
    constructor(private http: HttpClient) {
  
        this.currentUserSubject = new BehaviorSubject<User>(
          JSON.parse(localStorage.getItem("currentUser")|| '{}')
        );
    
        this.currentUser = this.currentUserSubject.asObservable();
    }
      public get currentUserValue(): User {
        return this.currentUserSubject.value;
      }
  
 

  login(connexion:any) {
    return this.http.post<any>(`${CONFIG.URL}auth/login2`, connexion).pipe(
      map((userconnexion) => {
        if (userconnexion && userconnexion.token) {
          localStorage.setItem("User", JSON.stringify(userconnexion));
          localStorage.setItem("Role",userconnexion.profil)
          localStorage.setItem("Email",userconnexion.email)
          localStorage.setItem("Token",userconnexion.token)  
          this.currentUserSubject.next(userconnexion);
          return userconnexion;
        }
      })
    );
  }  
  nouveaump(id:any ,password:any) {
        return  this.http.post(CONFIG.URL +  "users/nouveaump?id="+id+"&password="+password,{})
     }

  renitialiser(email:any) {
    return  this.http.post(CONFIG.URL +  "users/RenisialiserMotdepasseAdmin?email="+email,{})
   }


}