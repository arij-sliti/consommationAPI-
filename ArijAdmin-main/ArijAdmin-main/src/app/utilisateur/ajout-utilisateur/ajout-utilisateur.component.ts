import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StructureService } from 'src/app/structure/structure.service';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent {
  structureform!:FormGroup;
  constructor(private service : UtilisateurService,private route:Router){}
ngOnInit(){
  this.structureform =  new FormGroup({
    nom :new FormControl("",[Validators.required]),
    prenom  :new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    datenaissance:new FormControl("",[Validators.required]),
    login:new FormControl("",[Validators.required]),
    cin:new FormControl("",[Validators.required]),

  })

}
enregistrer(){
  this.service.ajout(this.structureform.value).subscribe((res)=>{
    window.alert("ajouter avec succées")
    this.route.navigateByUrl("utilisateur")
    setTimeout(() => {
      window.location.reload();
  }, 100);

  })
}
}
