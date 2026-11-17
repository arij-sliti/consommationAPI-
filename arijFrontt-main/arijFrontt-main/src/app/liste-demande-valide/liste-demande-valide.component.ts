import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../demande/demande.service';

@Component({
  selector: 'app-liste-demande-valide',
  templateUrl: './liste-demande-valide.component.html',
  styleUrls: ['./liste-demande-valide.component.css']
})
export class ListeDemandeValideComponent {
  lisedeamnde : any ;
constructor(private demandeservice : DemandeService,private route:Router){}
ngOnInit(){
  this.demandeservice.lisedeamnde().subscribe((res)=>{
    this.lisedeamnde=res ; 
    console.log(this.lisedeamnde)
  })
}
}
