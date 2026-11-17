import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriService } from './inscri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent {


///html-----> .ts ----> service -----> api back -----> base de donné


  userform!:FormGroup ;
  constructor(private service : InscriService,private route:Router){}
  ngOnInit(){
    this.userform = new FormGroup({
      prenom:new FormControl("",[Validators.required]),
      nom:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
      cin:new FormControl("",[Validators.required]),
      datenaissance:new FormControl("",[Validators.required])
    })
  }


  enregistrer(){
this.service.ajout(this.userform.value).subscribe((res)=>{
  if(res){
  window.alert("Enregistrer avec succées")
  setTimeout(() => {
    window.location.reload(); 
  }, 700); 
  this.route.navigateByUrl('connexion')

  }
else{
  window.alert("email existe deja")

}})  }

}
