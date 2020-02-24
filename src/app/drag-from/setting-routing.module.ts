import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';


const ROUTES: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      { path: '', redirectTo: 'form-template', pathMatch: 'full'},
      { 
        path: 'form-template',
        loadChildren: () => import('./form-template/form-template.module').then(m => m.FormTemplateModule) 
      },
      { 
        path: 'mat-drag-drop',
        loadChildren: () => import('./form-template/form-template.module').then(m => m.FormTemplateModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
