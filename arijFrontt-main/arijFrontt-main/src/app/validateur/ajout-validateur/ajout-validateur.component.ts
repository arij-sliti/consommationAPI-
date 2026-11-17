import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateurService } from '../validateur.service';

@Component({
  selector: 'app-ajout-validateur',
  templateUrl: './ajout-validateur.component.html',
  styleUrls: ['./ajout-validateur.component.css']
})
export class AjoutValidateurComponent {
  validForm!:FormGroup
  constructor(private service : ValidateurService){}
  ngOnInit(){
    this.validForm = new FormGroup({
      nom: new FormControl("",[Validators.required]),
      prenom: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      login: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      cin: new FormControl("",[Validators.required]),
      datenaissance: new FormControl("",[Validators.required]),
      profil: new FormControl("",[Validators.required]),

    })
  }
  Enregistrer(){
    let user = {
      
        "cin": this.validForm.value.cin,
        "datenaissance":  this.validForm.value.datenaissance,
        "email":  this.validForm.value.email,
        "login":  this.validForm.value.login,
        "nom":  this.validForm.value.nom,
        "password":  this.validForm.value.password,
        "prenom":  this.validForm.value.prenom
      }
      this.service.ajoutvalidateurbyemail(user,this.validForm.value.profil).subscribe((res)=>{
        window.alert("ajouter avec succées")
      })
    }
  
}
