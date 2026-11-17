import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from '../structure.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-structure',
  templateUrl: './modifier-structure.component.html',
  styleUrls: ['./modifier-structure.component.scss']
})
export class ModifierStructureComponent {
  id:any ;
  structure:any ;
  structureform!:FormGroup;

constructor(private serice: StructureService , private activaiteroute:ActivatedRoute,private route:Router){}
ngOnInit(){
  this.id = this.activaiteroute.snapshot.paramMap.get('id')
  this.serice.structurebyid(this.id).subscribe((res)=>{
    this.structure=res ;
  })
  this.structureform =  new FormGroup({
    nom :new FormControl("",[Validators.required]),
    prenom  :new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required]),

  })
  }
  enregistrer(){
    console.log(this.structureform.value)
    this.serice.modifier(this.structureform.value,this.id).subscribe((res)=>{
      if(res){
      window.alert("modifier avec succées")
      this.route.navigateByUrl("structure")
      setTimeout(() => {
        window.location.reload();
    }, 100);
  }
    })
    }
  }

