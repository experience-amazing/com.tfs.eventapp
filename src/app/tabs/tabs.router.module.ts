import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
            path: '',
            loadChildren: '../agenda/agenda.module#AgendaPageModule'
          }
        ]
      },
      {
        path: 'collaboration',
        children: [
          {
            path: '',
            loadChildren: '../collaboration/collaboration.module#CollaborationPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
