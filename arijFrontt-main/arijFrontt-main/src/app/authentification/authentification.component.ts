import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { connexionService } from './authentification.service';

@Component({
  selector: 'app-authentification',
  
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  loginform!:FormGroup ; 
  token:any; 
  result :any ;
  constructor(private service:connexionService,private route:Router){}
  ngOnInit(){

    this.token=localStorage.getItem("Token")
    this.loginform = new FormGroup ({
      email: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required])

    })
  }
  connexion(){
    
    this.service.login(this.loginform.value).subscribe((res)=>{
      if(res==null){
        window.alert("Votre Compte est desactiver")

      }
      else{
        setTimeout(() => {
          window.location.reload(); 
        }, 700); 
    window.alert("connexion avec succées")
    this.route.navigate(["acceuil"]);
    }
    })
  
  }
}
