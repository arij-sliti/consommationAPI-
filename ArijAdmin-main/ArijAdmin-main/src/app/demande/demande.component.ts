import { Component } from '@angular/core';
import {DemandeService} from '../demande/deamnde.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent {
  demandeform!:FormGroup;
  demande : any ; 
  afficher : boolean =false  ;
constructor(private service : DemandeService){}
ngOnInit(){
this.demandeform= new FormGroup({
  ref:new FormControl("",[Validators.required]),
})
}
recherche(){
  this.afficher=true ;
  this.service.Demandebyref(this.demandeform.value.ref).subscribe((res)=>{
    this.demande = res ; 
  })
}
}
