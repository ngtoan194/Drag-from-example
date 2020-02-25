import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFormioComponent } from './page/example-formio.component';
import { ExampleFormioRoutingModule } from './example-formio-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioModule } from 'angular-formio';


@NgModule({
  declarations: [
    ExampleFormioComponent
  ],
  imports: [
    CommonModule,
    ExampleFormioRoutingModule,
    DragDropModule,
    NgbModule,
    FormioModule
  ]
})
export class ExampleFormioModule { }
