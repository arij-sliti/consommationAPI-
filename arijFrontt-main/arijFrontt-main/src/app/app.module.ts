import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DemandeComponent } from './demande/demande.component';
import { InscriComponent } from './inscri/inscri.component';
import { ListapiComponent } from './listapi/listapi.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutApiComponent } from './listapi/ajout-api/ajout-api.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HebergeurComponent } from './hebergeur/hebergeur.component';
import { ListeDemandeTermineComponent } from './liste-demande-termine/liste-demande-termine.component';
import { ListeDemandeEncoursComponent } from './liste-demande-encours/liste-demande-encours.component';
import { ListeDemandeAvalideComponent } from './liste-demande-avalide/liste-demande-avalide.component';
import { ListeDemandeValideComponent } from './liste-demande-valide/liste-demande-valide.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { ListApiOwnerComponent } from './list-api-owner/list-api-owner.component';
import { AjoutValidateurComponent } from './validateur/ajout-validateur/ajout-validateur.component';
import { DemandeValidateurComponent } from './demande-validateur/demande-validateur.component';
import { ListeDemandeEncoursClientComponent } from './liste-demande-encours/liste-demande-encours-client/liste-demande-encours-client.component';
import { DetailComponent } from './demande-validateur/detail/detail.component';
import { ModifierValidateurComponent } from './validateur/modifier-validateur/modifier-validateur.component';
import { ModifierApiComponent } from './list-api-owner/modifier-api/modifier-api.component';
import { Demandeacceptervalidateur2Component } from './demandeacceptervalidateur2/demandeacceptervalidateur2.component';
import { InfoComponent } from './info/info.component';
import { RenitialiserMPComponent } from './authentification/renitialiser-mp/renitialiser-mp.component';
import { NouveauMpComponent } from './authentification/nouveau-mp/nouveau-mp.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AuthentificationComponent,
    ConnexionComponent,
    DemandeComponent,
    InscriComponent,
    ListapiComponent,
    ProfilUserComponent,
    AjoutApiComponent,
    HeaderComponent,
    FooterComponent,
    HebergeurComponent,
    ListeDemandeTermineComponent,
    ListeDemandeEncoursComponent,
    ListeDemandeAvalideComponent,
    ListeDemandeValideComponent,
    UtilisateurComponent,
    Acceuil1Component,
    ValidateurComponent,
    ListApiOwnerComponent,
    AjoutValidateurComponent,
    DemandeValidateurComponent,
    ListeDemandeEncoursClientComponent,
    DetailComponent,
    ModifierValidateurComponent,
    ModifierApiComponent,
    Demandeacceptervalidateur2Component,
    InfoComponent,
    RenitialiserMPComponent,
    NouveauMpComponent,
    ListedemandeComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
