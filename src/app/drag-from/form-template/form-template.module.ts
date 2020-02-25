import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { LibsModule } from 'src/app/shared/modules/libs/libs.module';
import { TemplatesComponent } from './containers/templates/templates.component';
import { FormTemplateRoutingModule } from './form-template-routing.module';
import { TemplateComponent } from './containers/template/template.component';
import { DynamicFormModule } from 'src/app/shared/modules/dynamic-form/dynamic-form.module';
import { DropzonesService } from './services/dropzones.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormControlItemComponent } from './components/form-control-item/form-control-item.component';
import { FormLayoutItemComponent } from './components/form-layout-item/form-layout-item.component';
import { DialogControlComponent } from './containers/template/dialog-control/dialog-control.component';


@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateComponent,
    FormControlItemComponent,
    FormLayoutItemComponent,
    DialogControlComponent
  ],
  imports: [
    LibsModule,
    MaterialModule,
    NgbModule,
    DragDropModule,
    DynamicFormModule,
    MatNativeDateModule,
    FormTemplateRoutingModule,
  ],
  entryComponents: [
    TemplateComponent,
    DialogControlComponent
  ],
  providers: [
    DropzonesService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class FormTemplateModule { }
