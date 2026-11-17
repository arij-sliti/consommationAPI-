import { Component } from '@angular/core';
import { connexionService } from '../login/authentification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renitialiser-mp',
  templateUrl: './renitialiser-mp.component.html',
  styleUrls: ['./renitialiser-mp.component.scss']
})
export class RenitialiserMpComponent {

  reniform!:FormGroup ; 
  token:any; 
  constructor(private service:connexionService,private route:Router){}
  ngOnInit(){

    this.token=localStorage.getItem("Token")
    this.reniform = new FormGroup ({
      email: new FormControl("",[Validators.required,Validators.email]),

    })
  }
  envoyer(){
    
    this.service.renitialiser(this.reniform.value.email).subscribe((res)=>{
      if(res){
      window.alert("connexion avec succées")
      this.route.navigateByUrl("dashboard")
  }})
  }
}
