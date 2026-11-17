import { Component } from '@angular/core';
import { ValidateurService } from './validateur.service';

@Component({
  selector: 'app-validateur',
  templateUrl: './validateur.component.html',
  styleUrls: ['./validateur.component.css']
})
export class ValidateurComponent {
  validateur : any ;
constructor(private service : ValidateurService){}
ngOnInit(){
  this.service.listvalidateurbyemail().subscribe((res)=>{
this.validateur=res ; 
  })


  
}
archiver(id:any){
  this.service.archiver(id).subscribe((res)=>{
    window.alert("archiver avec succées")
    window.location.reload()

  })
}
}
