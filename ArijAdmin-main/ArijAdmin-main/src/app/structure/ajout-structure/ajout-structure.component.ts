import { Component } from '@angular/core';
import { StructureService } from '../structure.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-structure',
  templateUrl: './ajout-structure.component.html',
  styleUrls: ['./ajout-structure.component.scss']
})
export class AjoutStructureComponent {
  structureform!:FormGroup;
  constructor(private service : StructureService,private route:Router){}
ngOnInit(){
  this.structureform =  new FormGroup({
    nom :new FormControl("",[Validators.required]),
    prenom  :new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    datenaissance:new FormControl("",[Validators.required]),
    login:new FormControl("",[Validators.required]),
    profil:new FormControl("",[Validators.required]),

  })

}
enregistrer(){
  let u = {
    nom:this.structureform.value.nom,
    prenom:this.structureform.value.prenom,
    email:this.structureform.value.email,
    password:this.structureform.value.password,
    datenaissance:this.structureform.value.datenaissance,
    login:this.structureform.value.login
  }
  this.service.ajouterstructure(u,this.structureform.value.profil).subscribe((res)=>{
    window.alert("ajouter avec succées")
    this.route.navigateByUrl("structure")
    setTimeout(() => {
      window.location.reload();
  }, 100);

  })
}
}
