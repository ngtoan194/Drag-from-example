import { Component } from '@angular/core';
import { Field } from '../../models/field.model';
import { FieldConfig } from '../../models/field-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-textbox',
  templateUrl: './form-textbox.component.html',
  styleUrls: ['./form-textbox.component.scss']
})
export class FormTextboxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
