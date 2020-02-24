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
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }