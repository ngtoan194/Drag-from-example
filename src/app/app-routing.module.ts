import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
  {
    path: 'setting',
    canActivate: [],
    loadChildren: () => import('./drag-from/setting.module').then(m => m.SettingModule)
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
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }