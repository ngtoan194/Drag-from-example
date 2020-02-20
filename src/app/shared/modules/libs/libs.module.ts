import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PageHeaderModule } from '../page-header/page-header.module';
import { NumberToIterablePipe } from '../../pipes/number-to-iterable.pipe';



@NgModule({
  declarations: [
    FieldErrorDisplayComponent,
    NumberToIterablePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageHeaderModule,
    
    FieldErrorDisplayComponent,
    NumberToIterablePipe
  ]
})
export class LibsModule { }
