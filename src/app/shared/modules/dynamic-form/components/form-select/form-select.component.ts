import { Component, OnInit } from '@angular/core';
import { Field } from '../../models/field.model';
import { FieldConfig } from '../../models/field-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
