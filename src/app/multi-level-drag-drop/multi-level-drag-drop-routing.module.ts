import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { MultiLevelDragDropComponent } from './page/multi-level-drag-drop.component';


const ROUTERS: Routes = [
  {
    path: '', component: MultiLevelDragDropComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTERS)],
  exports: [RouterModule],
})
export class MultiLevelDragDropRoutingModule { }
