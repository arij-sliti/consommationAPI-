import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { StructureComponent } from './structure/structure.component';
import { AjoutStructureComponent } from './structure/ajout-structure/ajout-structure.component';
import { ApiComponent } from './api/api.component';
import { DetailHebergeurComponent } from './hebergeur/detail-hebergeur/detail-hebergeur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { HebergeurComponent } from './hebergeur/hebergeur.component';
import { DemandeComponent } from './demande/demande.component';
import { ModifierStructureComponent } from './structure/modifier-structure/modifier-structure.component';
import { AjoutUtilisateurComponent } from './utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { ModifierUtilisateurComponent } from './utilisateur/modifier-utilisateur/modifier-utilisateur.component';
import { NouveauComponent } from './nouveau/nouveau.component';

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
    
  },

  {
    path: 'nouveau',
    component: NouveauComponent,
    data: {
      title: 'Login Page'
    }
    
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {      title: 'Home'    },
    children: [
      {path:'structure',component:StructureComponent},
      {path:'ajout-structure',component:AjoutStructureComponent},
      {path:'modifier-structure',component:ModifierStructureComponent},
      {path:'nouveau',component:NouveauComponent},

      {path:'liste-api',component:ApiComponent},
      {path:'utilisateur',component:UtilisateurComponent},
      {path:'ajout-utilisateur',component:AjoutUtilisateurComponent},
      {path:'modifier-utilisateur',component:ModifierUtilisateurComponent},

      {path:'Detail-Hebergeur',component:DetailHebergeurComponent},
      {path:'Hebergeur',component:HebergeurComponent},
      {path:'Demande',component:DemandeComponent},


      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
