import { Component } from '@angular/core';
import { ApiService } from '../listapi/listapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemandeService } from './demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',

  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
api:any ;
demandeForm!:FormGroup ; 
apibyid:any ;
dForm!:FormGroup
afficher:boolean=false;
listdemandeencours:any ; 
constructor(private apiservice : ApiService,private demandeservice:DemandeService,private route:Router){}
ngOnInit(){
 this.demandeservice.lisedeamndeencours().subscribe((res)=>{
  this.listdemandeencours=res ; 
 })
 this.dForm = new FormGroup({
  nom:new FormControl("",[Validators.required]),
  prenom:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required]),
  tel:new FormControl("",[Validators.required]),
  cadreutilisation:new FormControl("",[Validators.required]),
  mode:new FormControl("",[Validators.required]),

 })
  this.demandeForm = new FormGroup ({
    api: new FormControl("",[Validators.required]),
  })
this.apiservice.listapi().subscribe((res)=>{
  this.api =res ;
})
}
rechecher(){
  this.afficher=true ; 
  this.apiservice.apibyid(this.demandeForm.value.api).subscribe((res)=>{
this.apibyid=res ; 
})
}
demande(id:any){
this.demandeservice.ajoutdeamnde(id, localStorage.getItem("Email"),this.dForm.value.nom,this.dForm.value.prenom
,this.dForm.value.email,this.dForm.value.tel,this.dForm.value.mode,this.dForm.value.cadreutilisation).subscribe((res)=>{
  if(res){
    window.alert("demande Envoyer avec Succées")
    this.route.navigateByUrl('liste-demande-encours');

  
  }
})
}
}
