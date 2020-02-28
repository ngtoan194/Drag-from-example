import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelDragDropComponent } from './page/multi-level-drag-drop.component';
import { MultiLevelDragDropRoutingModule } from './multi-level-drag-drop-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListItemComponent } from '../shared/modules/list-item/list-item.component';
import { ListItemChildrenComponent } from '../shared/modules/list-item-children/list-item-children.component';


@NgModule({
  declarations: [
    ListItemComponent,
    MultiLevelDragDropComponent,
    ListItemChildrenComponent,
  ],
  imports: [
    CommonModule,
    MultiLevelDragDropRoutingModule,
    DragDropModule,
  ],
  entryComponents: [
    ListItemComponent,
    ListItemChildrenComponent,
  ],
})
export class MultiLevelDragDropModule { }
