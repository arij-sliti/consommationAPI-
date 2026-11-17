import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { connexionService } from '../authentification.service';

@Component({
  selector: 'app-renitialiser-mp',
  templateUrl: './renitialiser-mp.component.html',
  styleUrls: ['./renitialiser-mp.component.css']
})
export class RenitialiserMPComponent {
  reniform!:FormGroup
  constructor(private service : connexionService){}
ngOnInit(){
  this.reniform = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
  })
}
envoyer(){
  this.service.RenisialiserMotdepasse(this.reniform.value.email).subscribe((res)=>{
    window.alert("Verifier Votre Boite Email")
    window.location.reload()
  })
}
}
