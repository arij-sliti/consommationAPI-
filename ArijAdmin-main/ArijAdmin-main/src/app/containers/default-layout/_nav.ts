import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
 
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Gérer Structure',
    url: '/buttons',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Ajouter Structure',
        url: '/ajout-structure',
        iconComponent: { name: 'cilUserFollow' },
      },
     
      {
        name: 'Consulter liste Structure',
        url: '/structure',
        iconComponent: { name: 'cilPeople' },
      },
    
    ]
  },
  {
    name: 'Gérer Demandeur',
    url: '/buttons',
    iconComponent: { name: 'cilUser' },
    children: [
    
     {
        name: 'Ajouter demandeur',
        url: '/ajout-utilisateur',
        iconComponent: { name: 'cilUserFollow' },
      },
      {
        name: 'Consulter liste demandeur',
        url: '/utilisateur',
        iconComponent: { name: 'cilPeople' },
      },
    
    ]
  },


  {
    name: 'Gérer Demande',
    url: '/buttons',
    iconComponent: { name: 'cilUser' },
    children: [
    
   
      {
        name: 'Consulter liste Demande',
        url: '/Demande',
        iconComponent: { name: 'cilPeople' },
      },
    
    ]
  },
  

  {
    name: 'Gérer Api',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Consulter liste d Api',
        url: '/liste-api',
        iconComponent: { name: 'cilDescription' },
      }
    ]
  },
 






];
