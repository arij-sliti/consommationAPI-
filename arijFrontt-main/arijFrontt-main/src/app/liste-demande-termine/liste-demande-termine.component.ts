import { Component } from '@angular/core';
import { ApiService } from '../listapi/listapi.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DemandeService } from '../demande/demande.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-liste-demande-termine',
  templateUrl: './liste-demande-termine.component.html',
  styleUrls: ['./liste-demande-termine.component.css']
})
export class ListeDemandeTermineComponent {
demande : any ;
demandeur :any ;
  constructor(private demandeservice : ApiService,private service : DemandeService){}
ngOnInit(){
  this.demandeservice.demandebyemail().subscribe((res)=>{
    this.demande=res ; 
  })
}

supprimer(id:any){
this.demandeservice.supprimer(id).subscribe((res)=>{
  if(res){
  window.alert("supprimer avec succées")
  window.location.reload()
}})
}
generatePdf(id:any) {
  this.service.demandebyid(id).subscribe((res)=>{
  this.demandeur=res

  const dynamicContent = "Contrat de service de L'API de INSAF Fonction publique   ATTESTATION DE TRAVAIL";
  const documentDefinition: TDocumentDefinitions = {
    content: [
      {
        text: "République Tunisienne Ministère \n des Technologies de la Communication \n Centre National de l'Informatique",
        fontSize: 10,
        bold: true,
        alignment: 'left',
        margin: [0, 0, 0, 20]
    },
      // En-tête de la facture
      {
        text: "Contrat de service  de l’API de INSAF Fonction publique ATTESTATION DE TRAVAIL /n (Version Production) \n",
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20]
    },
    {
        text: 'Informations sur l\'entreprise',
        fontSize: 14,
        margin: [0, 0, 0, 10]
    },
    {
        text: 'Nom du demandeur : ' + this.demandeur?.utilisateur.nom,
        fontSize: 12,
        margin: [0, 0, 0, 10]
    },
    {
        text: 'Prénom du demandeur : ' + this.demandeur?.utilisateur?.prenom,
        fontSize: 12,
        margin: [0, 0, 0, 10]
    },
    {
        text: 'Email du demandeur : ' + this.demandeur?.utilisateur?.email,
        fontSize: 12,
        margin: [0, 0, 0, 10]
    },
    {
        text: '1 : Tableau des articles de la facture',
        fontSize: 20,
        margin: [50, 20, 30, 10]
    },
    {
        table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
                ['Nom du API', 'URL', 'Input', 'Output'],
                [this.demandeur?.api?.nom, this.demandeur?.url, this.demandeur?.api?.input, this.demandeur?.api?.output]
            ]
        }
    },
    {
        text: '2 : Paramètres d’accès:', // Titre de votre autre tableau
        fontSize: 14,
        margin: [0, 20, 0, 10] // Marge entre ce tableau et le précédent
    },
    {
        table: {
            headerRows: 1,
            // Définissez les largeurs des colonnes et les données de votre deuxième tableau ici
            body: [
              ['End Pont', this.demandeur?.url],
              ['Method',  'POST'],
              ['Request Parsing', 'application/json'],
              ['Response Format',  'application/json'],
            ]
        }
    }

      // Total de la facture
  ]
};
  
  pdfMake.createPdf(documentDefinition).open();
})
}


}
