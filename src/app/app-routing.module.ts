import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  {path: 'contact', loadChildren: './contact/contact.module#ContactPageModule'},
  { path: 'skills', loadChildren: './skills/skills.module#SkillsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'employment', loadChildren: './employment/employment.module#EmploymentPageModule' },
  { path: 'education', loadChildren: './education/education.module#EducationPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
