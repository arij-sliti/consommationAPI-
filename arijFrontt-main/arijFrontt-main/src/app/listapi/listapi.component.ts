import { Component } from '@angular/core';
import { ApiService } from './listapi.service';

@Component({
  selector: 'app-listapi',

  templateUrl: './listapi.component.html',
  styleUrls: ['./listapi.component.css']
})
export class ListapiComponent {
api:any ;
profil:any ;
  constructor(private service : ApiService){}
ngOnInit(){
this.service.listapi().subscribe((res)=>{
  this.api=res;
})
this.profil= localStorage.getItem("Role")
}

}
