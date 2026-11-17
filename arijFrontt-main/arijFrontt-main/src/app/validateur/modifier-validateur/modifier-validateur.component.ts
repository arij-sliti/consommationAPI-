import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateurService } from '../validateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-validateur',
  templateUrl: './modifier-validateur.component.html',
  styleUrls: ['./modifier-validateur.component.css']
})
export class ModifierValidateurComponent {

  validForm!:FormGroup
  id:any ;
  structure : any ;
  constructor(private service : ValidateurService,private route: ActivatedRoute){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id");
this.service.structurebyid(this.id).subscribe((res)=>{
this.structure=res ; 
})
    this.validForm = new FormGroup({
      nom: new FormControl("",[Validators.required]),
      prenom: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
  
    })
  }
  Enregistrer(){
  
  
    this.service.update(this.id,this.validForm.value.nom,this.validForm.value.prenom,this.validForm.value.email).subscribe((res)=>{
        window.alert("modifier avec succées")
        window.location.reload()
      })
    }
  
}

