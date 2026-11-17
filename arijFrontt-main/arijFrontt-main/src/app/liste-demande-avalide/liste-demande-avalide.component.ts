import { Component } from '@angular/core';
import { DemandeService } from '../demande/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-demande-avalide',
  templateUrl: './liste-demande-avalide.component.html',
  styleUrls: ['./liste-demande-avalide.component.css']
})
export class ListeDemandeAvalideComponent {
  demandeencours : any ;
  profil:any;
constructor(private demandeservice : DemandeService,private route:Router){}
ngOnInit(){
  this.profil=localStorage.getItem("Role")
  this.demandeservice.lisedeamndeencours().subscribe((res)=>{
    this.demandeencours=res ; 
  })
}
accepter(id:any){
  this.demandeservice.statusdemande(id).subscribe((res)=>{
    window.alert("demande Accepter en premier avec Succées")
    window.location.reload()

  })
}
refuser(id:any){
  this.demandeservice.status(id,"Refuser").subscribe((res)=>{
    window.alert("demande Refuser avec Succées")
window.location.reload()
  })
}
}
