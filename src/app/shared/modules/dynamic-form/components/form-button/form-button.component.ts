import { Component } from '@angular/core';
import { Field } from '../../models/field.model';
import { FieldConfig } from '../../models/field-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
