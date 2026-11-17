import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../listapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-api',
  templateUrl: './ajout-api.component.html',
  styleUrls: ['./ajout-api.component.css']
})
export class AjoutApiComponent {
  afficher:boolean=false ;
  apiForm!:FormGroup ; 

constructor(private apiservice : ApiService,private route:Router){}
ngOnInit(){
  this.apiForm = new FormGroup ({
    description:new FormControl("",[Validators.required]),
    input: new FormControl("",[Validators.required]),
    nom: new FormControl("",[Validators.required]),
    output: new FormControl("",[Validators.required]),
    adresse: new FormControl("",[Validators.required]),
    cni: new FormControl("",[Validators.required]),
    domaine: new FormControl("",[Validators.required]),
    locale: new FormControl("",[Validators.required]),
    nom2: new FormControl("",[Validators.required]),
    publier: new FormControl("",[Validators.required]),
    pays: new FormControl("",[Validators.required])
  })
}
value(){
  this.afficher = true;
}
value2(){
  this.afficher = false;
}


Enregistrer(){
  let e = {
    "api": {
      "description": this.apiForm.value.description,
      "input": this.apiForm.value.input,
      "nom": this.apiForm.value.nom,
      "output": this.apiForm.value.output
    },
    "hebergeur": {
      "adresse": this.apiForm.value.adresse,
      "cni": this.apiForm.value.cni,
      "domaine": this.apiForm.value.domaine,
      "locale": this.apiForm.value.locale,
      "nom": this.apiForm.value.nom2,
      "publier": this.apiForm.value.publier,
      "pays":this.apiForm.value.pays
    }
  }
  console.log(e)
  this.apiservice.ajoutapi(e).subscribe((res)=>{
    window.alert("api ajouter avec succées")
    this.route.navigateByUrl('listeapi')
  })
}
}
