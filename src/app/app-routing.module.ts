import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', loadChildren: './decider-page/decider-page.module#DeciderPagePageModule' },
  { path: '', loadChildren: './login-register/login-register.module#LoginRegisterPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'collaboration', loadChildren: './collaboration/collaboration.module#CollaborationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
