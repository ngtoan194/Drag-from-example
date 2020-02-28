import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateFormComponent } from './page/create-form.component';
import { CreateFormRoutingModule } from './create-form-routing.module';
import { DialogCreateFormComponent } from './dialog-create-form/dialog-create-form.component';


@NgModule({
  declarations: [
    CreateFormComponent,
    DialogCreateFormComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    CreateFormRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogCreateFormComponent
  ]
})
export class CreateFormModule { }
