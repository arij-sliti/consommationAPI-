import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  ///html --> .ts -->servcece ---> back ---W> base de donne
  title = 'FrontArij';
  connecter:any ;
  constructor(){}
  ngOnInit(){
this.connecter=localStorage.getItem('Token');
  }
}
