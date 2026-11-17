import { Component } from '@angular/core';
import { HebergeurService } from './hebergeur.service';

@Component({
  selector: 'app-hebergeur',
  templateUrl: './hebergeur.component.html',
  styleUrls: ['./hebergeur.component.scss']
})
export class HebergeurComponent {
allhebergeur : any ; 
  constructor(private service : HebergeurService){}
ngOnInit(){
this.service.allhebergeur().subscribe((res)=>{
  this.allhebergeur=res ; 
})
}
}
