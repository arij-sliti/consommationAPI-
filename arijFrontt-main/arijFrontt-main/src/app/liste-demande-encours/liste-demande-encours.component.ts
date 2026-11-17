import { Component } from '@angular/core';
import { DemandeService } from '../demande/demande.service';
import { ApiService } from '../listapi/listapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-liste-demande-encours',
  templateUrl: './liste-demande-encours.component.html',
  styleUrls: ['./liste-demande-encours.component.css']
})
export class ListeDemandeEncoursComponent {
  demandeencours : any ;
  demande:any;
  reftiform!:FormGroup;
constructor(private demandeservice : DemandeService,private service : ApiService){}
ngOnInit(){
  this.reftiform = new FormGroup({
    cadreutilisation :new FormControl("",[Validators.required]),
    mode :new FormControl("",[Validators.required]),
  })
  this.demandeservice.lisedeamndeencoursuser().subscribe((res)=>{
    this.demandeencours=res ; 
  })
}
supprimer(id:any){
  this.service.supprimer(id).subscribe((res)=>{
    if(res){
    window.alert("supprimer avec succées")
    window.location.reload()
  }})
  }
  rectif(id:any){
    this.demandeservice.demandebyid(id).subscribe((res)=>{
      this.demande=res ; 
    })
  }

  confirmer(){
    if(this.reftiform.value.cadreutilisation==''){
      this.demandeservice.rectifierrep(this.demande.id,this.demande.cadreutilisation,this.reftiform.value.mode).subscribe((res)=>{
        window.alert("reponse rectifier")
        window.location.reload()
        })

    }
    else if(this.reftiform.value.mode==''){
      this.demandeservice.rectifierrep(this.demande.id,this.reftiform.value.cadreutilisation,this.demande.mode).subscribe((res)=>{
        window.alert("reponse rectifier")
        window.location.reload()
        })
    }
    else{
      this.demandeservice.rectifierrep(this.demande.id,this.reftiform.value.cadreutilisation,this.reftiform.value.mode).subscribe((res)=>{
        window.alert("reponse rectifier")
        window.location.reload()
        })
    }

  }
}
