import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { connexionService } from '../views/pages/login/authentification.service';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.scss']
})
export class NouveauComponent {
  form!:FormGroup;
  id:any ;
    constructor(private route: ActivatedRoute,private service : connexionService,private router: Router){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id");
  console.log(this.id)
    this.form = new FormGroup({
      password1: new FormControl("",[Validators.required]),
      password2:new FormControl("",[Validators.required])
  
    })
  }
  enregistrer(){
    if(this.form.value.password1!=this.form.value.password2){
      window.alert("Verifier le mot de passe")
    }else{
      this.service.nouveaump(this.id,this.form.value.password1).subscribe((res)=>{
        window.alert("nouveau mot de passe a enregistrer avec succées")
        this.router.navigate(["login"]);
  
      })
    }
  }
}
