import { Component } from '@angular/core';
import { DemandeService } from '../demande/demande.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-validateur',
  templateUrl: './demande-validateur.component.html',
  styleUrls: ['./demande-validateur.component.css']
})
export class DemandeValidateurComponent {
  demandeencours:any ;
  demandee:any ;
  rectiffrom!:FormGroup;
  profil:any ;
  ids:any ;
  form2!:FormGroup;
  affiche=false ;
constructor(private service : DemandeService,private route:Router){}
ngOnInit(){
  this.rectiffrom = new FormGroup({
    rectifier :new FormControl("",[Validators.required]),
    
  })
  this.form2= new FormGroup({
    refus :new FormControl("",[Validators.required]),

  })
this.profil=localStorage.getItem("Role")
  this.service.lisedeamndevalidateur().subscribe((res)=>{
this.demandeencours=res ; 
  })
  this.service.lisedeamndevalidateur2().subscribe((res)=>{
    this.demandee=res ; 
      })
}
accepter(id:any){
  this.service.statusdemande(id).subscribe((res)=>{
    this.route.navigateByUrl('liste-tous-demande')

    setTimeout(() => {
window.location.reload()
}, 500);

  })
}
afficher(){
  this.affiche=true
}
confirmer(){
  this.service.rectifier(this.ids,this.rectiffrom.value.rectifier).subscribe((res)=>{
    window.alert("demande Rectifier")

    this.route.navigateByUrl('liste-tous-demande')

    setTimeout(() => {
window.location.reload()
}, 500);

  }) 
}
id(id:any){
  this.ids=id;
}
refusers(id:any){
  console.log(this.form2.value.refus)
  this.service.status2(id,"Refuser",this.form2.value.refus).subscribe((res)=>{
    window.alert("demande Refuser")
    this.route.navigateByUrl('liste-tous-demande')

    setTimeout(() => {
window.location.reload()
}, 500);

  })
}


refuser(id:any){
  this.service.refuser(id,"Refuser").subscribe((res)=>{
    window.alert("demande Refuser")
    this.route.navigateByUrl('liste-tous-demande')

    setTimeout(() => {
window.location.reload()
}, 500);

  })
}
rectifier(id:any){
  this.service.status(id,"Rectifier").subscribe((res)=>{
    window.alert("demande Rectifier")
    this.route.navigateByUrl('liste-tous-demande')

    setTimeout(() => {
window.location.reload()
}, 500);

  })
}
}
