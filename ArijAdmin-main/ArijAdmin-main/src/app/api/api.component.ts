import { Component } from '@angular/core';
import{ApiService} from '../api/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  allapi :any ;
constructor(private service : ApiService){}
ngOnInit(){
  this.service.allapi().subscribe((res)=>{
this.allapi=res ; 
console.log(this.allapi)
  })
}
}
