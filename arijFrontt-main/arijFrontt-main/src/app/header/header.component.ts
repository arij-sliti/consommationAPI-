import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
conexion:any ;
role:any ;
email:any ;
  constructor(private router : Router){}
ngOnInit(){
this.conexion=localStorage.getItem("Token")
this.role=localStorage.getItem("Role")
this.email=localStorage.getItem("Email")
console.log(this.email)
}
  deconnexion(){
    localStorage.removeItem("User")
    localStorage.removeItem("Email")
    localStorage.removeItem("Role")
    localStorage.removeItem("Token")
   // this.router.navigate(["connexion"])
//    window.location.reload()
  } 
}
