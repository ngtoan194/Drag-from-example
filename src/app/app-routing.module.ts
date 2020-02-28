import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
  {
    path: 'setting',
    canActivate: [],
    loadChildren: () => import('./drag-form/setting.module').then(m => m.SettingModule)
  },
  {
    path: 'mat-drag-drop',
    canActivate: [],
    loadChildren: () => import('./mat-drag-drop/mat-drag-drop.module').then(m => m.MatDragDropModule)
  },
  {
    path: 'example-form-io',
    canActivate: [],
    loadChildren: () => import('./example-formio/example-formio.module').then(m => m.ExampleFormioModule)
  },
  {
    path: 'multi-level-drag-drop',
    canActivate: [],
    loadChildren: () => import('./multi-level-drag-drop/multi-level-drag-drop.module').then(m => m.MultiLevelDragDropModule)
  },
  {
    path: 'create-form',
    canActivate: [],
    loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }