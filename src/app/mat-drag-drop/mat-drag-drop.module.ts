import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDragDropComponent } from './page/mat-drag-drop.component';
import { MatDragDropRoutingModule } from './mat-drag-drop-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MatDragDropComponent
  ],
  imports: [
    CommonModule,
    MatDragDropRoutingModule,
    DragDropModule,
    NgbModule
  ]
})
export class MatDragDropModule { }
