import { Component } from '@angular/core';
import{StructureService} from '../structure/structure.service';
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent {
  allstructure :any ;
constructor(private serivce : StructureService){}
ngOnInit(){
  this.serivce.allstructure().subscribe((res)=>{
    this.allstructure=res ; 
  })
}
archiver(id:any){
  this.serivce.archiver(id).subscribe((res)=>{
    window.alert("archiver avec succées")
    window.location.reload()

  })
}
}
