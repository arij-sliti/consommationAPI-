import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DemandeComponent } from './demande/demande.component';
import { InscriComponent } from './inscri/inscri.component';
import { ListapiComponent } from './listapi/listapi.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AjoutApiComponent } from './listapi/ajout-api/ajout-api.component';
import { HebergeurComponent } from './hebergeur/hebergeur.component';
import { ListeDemandeTermineComponent } from './liste-demande-termine/liste-demande-termine.component';
import { ListeDemandeEncoursComponent } from './liste-demande-encours/liste-demande-encours.component';
import { ListeDemandeAvalideComponent } from './liste-demande-avalide/liste-demande-avalide.component';

import { Acceuil1Component } from './acceuil1/acceuil1.component';

import { ListeDemandeValideComponent } from './liste-demande-valide/liste-demande-valide.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { ListApiOwnerComponent } from './list-api-owner/list-api-owner.component';
import { AjoutValidateurComponent } from './validateur/ajout-validateur/ajout-validateur.component';
import { DemandeValidateurComponent } from './demande-validateur/demande-validateur.component';
import { DetailComponent } from './demande-validateur/detail/detail.component';
import { ModifierValidateurComponent } from './validateur/modifier-validateur/modifier-validateur.component';
import { ModifierApiComponent } from './list-api-owner/modifier-api/modifier-api.component';
import { Demandeacceptervalidateur2Component } from './demandeacceptervalidateur2/demandeacceptervalidateur2.component';
import { InfoComponent } from './info/info.component';
import { RenitialiserMPComponent } from './authentification/renitialiser-mp/renitialiser-mp.component';
import { NouveauMpComponent } from './authentification/nouveau-mp/nouveau-mp.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';


const routes: Routes = [
  { path: 'RenitialiserMP',component:RenitialiserMPComponent},
  { path: 'nouveau-mp',component:NouveauMpComponent},
  { path: 'inscri', component: InscriComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'demande', component: DemandeComponent },
  { path: 'conexion', component: ConnexionComponent },
  { path: 'profiluser', component: ProfilUserComponent },
  { path: 'listeapi', component: ListapiComponent },
  { path: 'listeapiowner', component: ListApiOwnerComponent },
  { path: 'modifierlisteapiowner', component: ModifierApiComponent },

  { path: 'connexion', component: AuthentificationComponent },
  { path: 'validateur', component: ValidateurComponent },
  { path: 'modifier-validateur', component: ModifierValidateurComponent },
  { path: 'demande-validateur', component: DemandeValidateurComponent },
  { path: 'detail-demande-validateur', component: DetailComponent },
  { path: 'Demande-accepter', component: Demandeacceptervalidateur2Component },

  { path: 'ajout-validateur', component: AjoutValidateurComponent },

  {path:'ajout-api', component:AjoutApiComponent},
  { path: 'hebergeur', component: HebergeurComponent },
  { path: 'liste-demande-termine', component: ListeDemandeTermineComponent },
  { path: 'liste-demande-encours', component: ListeDemandeEncoursComponent },
  { path: 'liste-demande-avalide', component:ListeDemandeAvalideComponent },
  { path: 'liste-demande-valide', component:ListeDemandeValideComponent },
  { path: 'liste-tous-demande', component:ListedemandeComponent },

  { path: '', component:Acceuil1Component },
  {path:'info', component:InfoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
