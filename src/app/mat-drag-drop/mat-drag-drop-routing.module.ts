import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { MatDragDropComponent } from './page/mat-drag-drop.component';


const ROUTERS: Routes = [
  {
    path: '', component: MatDragDropComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class MatDragDropRoutingModule { }
