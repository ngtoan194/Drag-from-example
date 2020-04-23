import { Component, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormLayout } from '../../models/form-layout.model';


const LAYOUTS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormLayoutItemComponent),
  multi: true,
};
@Component({
  selector: 'app-form-layout-item',
  providers: [LAYOUTS_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-layout-item.component.html',
  styleUrls: ['./form-layout-item.component.scss']
})
export class FormLayoutItemComponent implements ControlValueAccessor {

  @Input() layouts: FormLayout[];
  value: any;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: FormLayout[]) {
    this.value = value;
  }

  selectLayout(layout: FormLayout) {
    this.value = layout.id;
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInLayouts(layout: FormLayout) {
    if(this.value === layout.id) {
      return true;
    }
    return false;
  }
}
