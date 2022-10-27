import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: 'menu', loadChildren: () => import('./shared/pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'Works', loadChildren: () => import('./shared/pages/works/works.module').then(m => m.WorksModule) },
  { path: 'Studies', loadChildren: () => import('./shared/pages/studies/studies.module').then(m => m.StudiesModule) },
  { path: 'AboutMe', loadChildren: () => import('./shared/pages/about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: 'Contact', loadChildren: () => import('./shared/pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'Uni', loadChildren: () => import('./shared/pages/studies/uni/uni.module').then(m => m.UniModule) },
  { path: 'School', loadChildren: () => import('./shared/pages/studies/school/school.module').then(m => m.SchoolModule) },
  { path: 'Educacionit', loadChildren: () => import('./shared/pages/studies/educacionit/educacionit.module').then(m => m.EducacionitModule) },
  { path: 'Accenture', loadChildren: () => import('./shared/pages/works/accenture/accenture.module').then(m => m.AccentureModule) },
  { path: 'Fonoglobal', loadChildren: () => import('./shared/pages/works/fonoglobal/fonoglobal.module').then(m => m.FonoglobalModule) },
  { path: 'Twireless', loadChildren: () => import('./shared/pages/works/twireless/twireless.module').then(m => m.TwirelessModule) },
  {path: '**', component:HeaderComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
