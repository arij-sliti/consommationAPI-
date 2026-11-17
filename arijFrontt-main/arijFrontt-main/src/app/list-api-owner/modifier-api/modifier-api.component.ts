import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/listapi/listapi.service';

@Component({
  selector: 'app-modifier-api',
  templateUrl: './modifier-api.component.html',
  styleUrls: ['./modifier-api.component.css']
})
export class ModifierApiComponent {
  afficher:boolean=false ;
  apiForm!:FormGroup ; 
  id:any ;
  api:any ;

constructor(private apiservice : ApiService,private route:Router ,private router: ActivatedRoute){}
ngOnInit(){
  this.id = this.router.snapshot.paramMap.get("id");
  this.apiservice.afficherbyid(this.id).subscribe((res)=>{
this.api=res ;   })
  this.apiForm = new FormGroup ({
    description:new FormControl("",[Validators.required]),
    input: new FormControl("",[Validators.required]),
    nom: new FormControl("",[Validators.required]),
    output: new FormControl("",[Validators.required]),
  })
}
value(){
  this.afficher = true;
}
value2(){
  this.afficher = false;
}


Enregistrer(){
  this.apiservice.updateapi(this.id,this.apiForm.value.input,this.apiForm.value.output,this.apiForm.value.nom,this.apiForm.value.description).subscribe((res)=>{
    window.alert("api modifier avec succées")
    this.route.navigateByUrl('listeapi')
  })
}
}
