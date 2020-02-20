import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormTextboxComponent } from './components/form-textbox/form-textbox.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FieldDirective } from './directives/field.directive';



@NgModule({
  declarations: [
    FieldDirective,
    FormButtonComponent,
    FormTextboxComponent,
    FormSelectComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormTextboxComponent,
    FormSelectComponent,
  ]
})
export class DynamicFormModule { }
