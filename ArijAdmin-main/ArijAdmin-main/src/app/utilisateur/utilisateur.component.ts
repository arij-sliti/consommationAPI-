import { Component } from '@angular/core';
import{UtilisateurService} from'../utilisateur/utilisateur.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent {
  alluser:any ; 
  constructor(private service : UtilisateurService){}
  ngOnInit(){
    this.service.allutilisateur().subscribe((res)=>{
      this.alluser=res ; 
      console.log(this.alluser)
    })
  }
archiver(email:any){
  this.service.archiver(email).subscribe((res)=>{
    window.alert("archiver avec succeés")
    window.location.reload()
  })
}
}
