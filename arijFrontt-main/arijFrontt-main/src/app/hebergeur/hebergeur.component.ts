import { Component } from '@angular/core';
import { HebergeurService } from './hebergeurservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hebergeur',
  templateUrl: './hebergeur.component.html',
  styleUrls: ['./hebergeur.component.css']
})
export class HebergeurComponent {
  id:any ;
  hebergeur:any ;
  constructor(private service : HebergeurService, private route: ActivatedRoute){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id");

    this.service.hebergeur(this.id).subscribe((res)=>{
this.hebergeur=res ; 
console.log(this.hebergeur)
    })
  }

}
