import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {connexionService} from '../login/authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginform!:FormGroup ; 
  token:any; 
  affiche1=false;
  id:any
  constructor(private service:connexionService,private route:Router,private router: ActivatedRoute){}
  ngOnInit(){
    this.id = this.router.snapshot.paramMap.get("id");

    this.token=localStorage.getItem("Token")
    this.loginform = new FormGroup ({
      email: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required]),
      email2: new FormControl("",[Validators.required,Validators.email]),
      password1:new FormControl("",[Validators.required]),
      password2:new FormControl("",[Validators.required]),

    })
  }
  affiche(){
   // window.location.reload()
    this.affiche1=true;
    console.log(this.affiche1)
  }
  enregistrer(){
    if(this.loginform.value.password1!=this.loginform.value.password2){
      window.alert("Verifier le mot de passe")
    }else{
      this.service.nouveaump(this.id,this.loginform.value.password1).subscribe((res)=>{
        window.alert("nouveau mot de passe a enregistrer avec succées")
  
      })
    }
  }
  
  envoyer(){
    this.service.renitialiser(this.loginform.value.email2).subscribe((res)=>{
      window.alert("Verifier Votre boit Email")
      window.location.reload()
    })  
  }
  connexion(){
    let login ={
      email:this.loginform.value.email,
      password:this.loginform.value.password
    }
    
    this.service.login(login).subscribe((res)=>{
      window.alert("connexion avec succées")
      this.route.navigateByUrl("dashboard")
    })
  }


}
