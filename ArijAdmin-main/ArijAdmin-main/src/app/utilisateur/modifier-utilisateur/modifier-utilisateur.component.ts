import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.scss']
})
export class ModifierUtilisateurComponent {
  structureform!:FormGroup;
  email:any ;
  user:any ;
  id:any;
  constructor(private service : UtilisateurService,private route:Router,private routes: ActivatedRoute){}
ngOnInit(){
  this.id = this.routes.snapshot.paramMap.get("id");
  this.service.GetUserbyid(this.id).subscribe((res)=>{
this.user=res ;
  })
  this.structureform =  new FormGroup({
    nom :new FormControl("",[Validators.required]),
    prenom  :new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required]),


  })

}
enregistrer(){
  this.service.update(this.id,this.structureform.value.nom,this.structureform.value.prenom,this.structureform.value.email).subscribe((res)=>{
    window.alert("modififer avec succées")
    this.route.navigateByUrl("utilisateur")
    setTimeout(() => {
      window.location.reload();
  }, 100);

  })
}
}
