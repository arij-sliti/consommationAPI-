import { Component } from '@angular/core';
import { DemandeService } from '../demande/demande.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demandeacceptervalidateur2',
  templateUrl: './demandeacceptervalidateur2.component.html',
  styleUrls: ['./demandeacceptervalidateur2.component.css']
})
export class Demandeacceptervalidateur2Component {
  demandeencours:any ;
  demandee:any ;
  urlForm !:FormGroup;
  profil:any ;
constructor(private service : DemandeService){}
ngOnInit(){
  this.urlForm = new FormGroup({
    url:new FormControl("",[Validators.required])
  })
  this.service.demandevalidateuracceper2().subscribe((res)=>{
    this.demandee=res ; 
    console.log(this.demandee)
      })
}
url(id:any){
  console.log(id)
console.log(this.urlForm.value.url)
this.service.url(id,this.urlForm.value.url).subscribe((res)=>{
  window.alert("URL Enregistrer")
  window.location.reload();
})

}


}
