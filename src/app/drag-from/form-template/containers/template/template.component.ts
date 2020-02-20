import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm();
  }

  fromDrag: FormGroup;

  isEdit: boolean = false;

  // FORM
  // build form
  private buildForm() {
    this.fromDrag = this.fb.group({
      disabled: [''],
      label: [''],
      name: [''],
      options: [''],
      placeholder: [''],
      type: [''],
      validation: [''],
      value: [''],
    });
  }

  // return form
  get f() {
    return this.fromDrag.controls;
  }
  // END FORM

  tempControls = [
    { id: 1, type: 'date', name: 'Date', disabled: false },
    { id: 2, type: 'label', name: 'Label', disabled: false },
    { id: 3, type: 'text', name: 'Input text', disabled: false },
    { id: 4, type: 'select', name: 'Select', disabled: false },
    { id: 5, type: 'button', name: 'Button', disabled: false }
  ];

  controls = [];

  data = [];

  ngOnInit(): void {
  }

  get getControl(): string[] {
    return this.tempControls.map(control => control.name);
  }

  onControlDrop(event: CdkDragDrop<any[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let currentItem: any = this.tempControls[event.previousIndex];
      this.data.push(1)
      currentItem.idControl = this.data.length

      // this.data.push(
      //   {
      //     id: this.data.length + 1,
      //     isabled: '',
      //     label: '',
      //     name: currentItem.name,
      //     options: '',
      //     placeholder: '',
      //     type: currentItem.type,
      //     validation: '',
      //     value: '',
      //   }
      // )
      if (_.find(event.container.data, currentItem)) {
        console.log('dssssssssssss', currentItem);
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // copyArrayItem(
      //   this.tempControls,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );

      this.tempControls = [
        { id: 1, type: 'date', name: 'Date', disabled: false },
        { id: 2, type: 'label', name: 'Label', disabled: false },
        { id: 3, type: 'text', name: 'Input text', disabled: false },
        { id: 4, type: 'select', name: 'Select', disabled: false },
        { id: 5, type: 'button', name: 'Button', disabled: false }
      ];

      console.log('currentItem', currentItem);
      console.log('data', this.data);
      console.log('controls', this.controls);
    }
  }

  changeText(control) {
    this.fromDrag.controls['name'].setValue(control.name);
    this.controls.forEach(item => {
      if (item.idControl === control.idControl) {
        item.disabled = !item.disabled;
      }
    })
  }

  onChangeText(control) {
    this.controls.forEach(item => {
      if (item.idControl === control.idControl) {
        item.name = this.fromDrag.value.name ? this.fromDrag.value.name : 'Input text';
        item.disabled = !item.disabled;
      }
    })
    this.fromDrag.controls['name'].setValue('');
  }

}
