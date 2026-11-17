import { Component } from '@angular/core';
import{HebergeurService} from '../hebergeur.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-hebergeur',
  templateUrl: './detail-hebergeur.component.html',
  styleUrls: ['./detail-hebergeur.component.scss']
})
export class DetailHebergeurComponent {
  id:any ; 
  hebergeur: any ; 
constructor(private service : HebergeurService,private activaiteroute:ActivatedRoute){}


ngOnInit(){
  this.id = this.activaiteroute.snapshot.paramMap.get('id')

  this.service.hebergeurbyid(this.id).subscribe((res)=>{
    this.hebergeur=res ; 
  })
}
}
