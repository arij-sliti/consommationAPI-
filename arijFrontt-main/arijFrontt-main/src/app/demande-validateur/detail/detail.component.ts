import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/demande/demande.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  demande:any ;
  id:any
constructor(private service : DemandeService,private route: ActivatedRoute){}
ngOnInit(){
  this.id = this.route.snapshot.paramMap.get("id");

this.service.demandebyid(this.id).subscribe((res)=>{
  this.demande=res ; 
})
}
}
