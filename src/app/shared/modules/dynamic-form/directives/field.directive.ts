import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.model';
import { FieldConfig } from '../models/field-config.model';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormTextboxComponent } from '../components/form-textbox/form-textbox.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';

const components: { [type: string]: Type<Field> } = {
  button: FormButtonComponent,
  text: FormTextboxComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class FieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}