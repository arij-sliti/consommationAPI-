import { Component } from '@angular/core';
import { ApiService } from '../listapi/listapi.service';

@Component({
  selector: 'app-list-api-owner',
  templateUrl: './list-api-owner.component.html',
  styleUrls: ['./list-api-owner.component.css']
})
export class ListApiOwnerComponent {
  api:any ;
  constructor(private service : ApiService){}
ngOnInit(){
this.service.listapibyemail().subscribe((res)=>{
  this.api=res;
})
}
archiver(id:any){
  this.service.archiver(id).subscribe((res)=>{
    window.alert("archiver avec succées")
    window.location.reload()
  })
}
}
