import { Component } from '@angular/core';
import { DemandeService } from '../demande/demande.service';

@Component({
  selector: 'app-listedemande',
  templateUrl: './listedemande.component.html',
  styleUrls: ['./listedemande.component.css']
})
export class ListedemandeComponent {
demande:any ;
  constructor(private service: DemandeService){}
ngOnInit(){
  this.service.lisedeamnde().subscribe((res)=>{
this.demande=res ; 
console.log(res)
  })
}
}
