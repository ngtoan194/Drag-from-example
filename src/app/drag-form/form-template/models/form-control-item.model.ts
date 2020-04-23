import { ValidatorFn } from '@angular/forms';
import * as uuid from 'uuid';

export class FormControlItem {
  id?: any;
  uId?: string;
  name: string;
  type: string;
  description?: string;
  defaultValue?: any;
  label?: string;
  disabled?: boolean;
  options?: any[];
  placeholder?: string;
  fontSize?: number;
  isInline?: boolean;
  width?: any;
  isHorizontal? : boolean;
  validation?: any[];

  constructor(options: {
    name: string;
    type: string;
    description: string;
    label: string;
    options: any[];
    placeholder: string;
    disabled? : boolean;
    fontSize?: number;
    isInline?: boolean;
    width?: any;
    isHorizontal? : boolean;
    validation?: any[];
  }) {
    this.uId = uuid.v4();
    this.name = options.name;
    this.type = options.type;
    this.description = options.description;
    this.defaultValue = null;
    this.label = options.label;
    this.disabled = false;
    this.options = options.options;
    this.placeholder = options.placeholder;
    this.fontSize = options.fontSize;
    this.width = options.width;
    this.isInline = false;
    this.isHorizontal = false;
    this.validation = options.validation;
  }
}