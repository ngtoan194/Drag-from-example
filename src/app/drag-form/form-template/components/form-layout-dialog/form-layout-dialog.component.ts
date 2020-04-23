import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormTabItem } from '../../models/form-tab-item.model';
import { FormTableColumn } from '../../models/form-table-column.model';

@Component({
  selector: 'app-form-layout-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-layout-dialog.component.html',
  styleUrls: ['./form-layout-dialog.component.scss']
})
export class FormLayoutDialogComponent implements OnInit {

  data: any;

  layoutForm: FormGroup;
  tableForm: FormGroup;
  tabForm: FormGroup;
  panelForm: FormGroup;
  controlForm: FormGroup;

  editor = ClassicEditor;
  labelData: any = `<p>Hello, world!</p>`;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormLayoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    // get data from parent compoent
    this.data = data;
  }

  ngOnInit() {
    if (this.data.layoutType === 'LAYOUT') {
      this.buildLayoutForm();
    }

    if (this.data.layoutType === 'TABLE') {
      this.buildTableForm();
      if (this.data.data) {
        this.patchValueTableForm();
      }
      console.log(this.tableFormColumns)
    }

    if (this.data.layoutType === 'PANEL') {
      this.buildPanelForm();
      if (this.data.data) {
        this.panelForm.patchValue(this.data.data);
      }
    }

    if (this.data.layoutType === 'TAB') {
      this.buildTabForm();
      if (this.data.data) {
        this.patchValueTabForm();
      }
    }

    if (this.data.layoutType === 'CONTROL') {
      this.buildControlForm();
      if (this.data.data) {
        if (this.data.data.validation.length > 0) {
          this.data.data.validation.forEach(element => {
            if (element.required) {
              this.data.data.required = element.value;
              this.data.data.messageRequired = element.message;
            }
            if (element.unique) {
              this.data.data.unique = element.unique.value;
              this.data.data.messageUnique = element.unique.message;
            }
            if (element.minimumLength) {
              this.data.data.minimumLength = element.minimumLength.value;
              this.data.data.messageMinimumLength = element.minimumLength.message;
            }
            if (element.maximumLength) {
              this.data.data.maximumLength = element.maximumLength.value;
              this.data.data.messageMaximumLength = element.maximumLength.message;
            }
          });
        }
        this.controlForm.patchValue(this.data.data);
        if (this.data.data.type === 'radio' || this.data.data.type === 'selectBoxes' || this.data.data.type === 'select' || this.data.data.type === 'file'){
          this.data.data.options.forEach(element => {
            const formGroup = this.initRadioOption();
            formGroup.patchValue(element);
            this.controlFormOptions.push(formGroup);
          });
        }
      }
    }
  }

  // Patch value tab form
  patchValueTabForm() {
    this.tabForm.patchValue(this.data.data);
    this.data.data.items.forEach((tab: FormTabItem) => {
      const formGroup = this.initTabItem();
      formGroup.patchValue(tab);
      this.tabFormItems.push(formGroup);
    });
  }

 // Patch value table form
  patchValueTableForm() {
    this.tableForm.patchValue(this.data.data);
    this.data.data.columns.forEach((column: FormTableColumn) => {
      const formGroup = this.initTableCloumns();
      formGroup.patchValue(column);
      this.tableFormColumns.push(formGroup);
    });
  }

  onSave(form: FormGroup) {
    const { valid, value, touched } = form;
    if (this.data.layoutType === 'CONTROL') {
      let listVal = [];
      if (value.required) {
        listVal.push({ required: { value: true, message: value.messageRequired } })
      } else {
        listVal.push({ required: null })
      }
      if (value.unique) {
        listVal.push({ unique: { value: true, message: value.messageUnique } })
      } else {
        listVal.push({ unique: null })
      }
      if (value.minimumLength) {
        listVal.push({ minimumLength: { value: value.minimumLength, message: value.messageMinimumLength } })
      } else {
        listVal.push({ minimumLength: null })
      }
      if (value.maximumLength) {
        listVal.push({ maximumLength: { value: value.maximumLength, message: value.messageMaximumLength } })
      } else {
        listVal.push({ maximumLength: null })
      }
      value.validation = listVal;
    }
    this.dialogRef.close(value);
    if (valid) {
      this.dialogRef.close(value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private buildLayoutForm() {
    this.layoutForm = this.fb.group({
      id: [null, Validators.required]
    });
  }

  private buildTabForm() {
    this.tabForm = this.fb.group({
      name: ['', Validators.required],
      items: new FormArray([])
    });
  }

  get tabFormItems(): FormArray {
    return this.tabForm.get('items') as FormArray;
  }

  private initTabItem(): FormGroup {
    let tabItem = new FormTabItem({ title: 'Tab title', displayOrder: 0 });
    return this.fb.group({
      uId: tabItem.uId,
      title: tabItem.title,
      displayOrder: tabItem.displayOrder,
      layouts: tabItem.layouts
    });
  }

  onCreateTab() {
    let items = this.tabForm.controls.items as FormArray;
    const itemsLenght = items.length;
    if (itemsLenght < 5) {
      items.push(this.initTabItem());
    }
  }

  onRemoveTab(tabIndex: number) {
    const tabItems = <FormArray>this.tabForm.controls['items'];
    tabItems.removeAt(tabIndex);
    if (tabItems.length === 0) {
      this.onCreateTab();
    }
  }

  private buildPanelForm() {
    this.panelForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  private buildTableForm() {
    this.tableForm = this.fb.group({
      name: ['', Validators.required],
      dataSource: [''],
      columns: new FormArray([]),
      data: new FormArray([]),
    });
  }

  get tableFormColumns(): FormArray {
    return this.tableForm.get('columns') as FormArray;
  }

  private initTableCloumns(): FormGroup {
    return this.fb.group({
      columnName: '',
    });
  }

  onCreateColumn(){  
    let items = this.tableForm.controls.columns as FormArray;
    items.push(this.initTableCloumns());
  }

  onRemoveColumn(i: number){
    const column = <FormArray>this.tableForm.controls['columns'];
    column.removeAt(i);
  }

  private buildControlForm() {
    this.controlForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: [''],
      description: [''],
      defaultValue: [''],
      fontSize: [''],
      disabled: [],
      isInline: [],
      width: [],
      isHorizontal: [],
      required: [''],
      messageRequired: [''],
      unique: [''],
      messageUnique: [''],
      minimumLength: [''],
      messageMinimumLength: [''],
      maximumLength: [''],
      messageMaximumLength: [''],
      options: new FormArray([]),
    });
  }

  // return form
  get f() {
    return this.controlForm.controls;
  }

  get controlFormOptions(): FormArray {
    return this.controlForm.get('options') as FormArray;
  }

  private initRadioOption(): FormGroup {
    return this.fb.group({
      label: '',
      value: '',
      name: '',
      file: '',
    });
  }

  onCreateOption(){  
    let items = this.controlForm.controls.options as FormArray;
    const itemsLenght = items.length;
    // if (itemsLenght < 5) {
      items.push(this.initRadioOption());
    // }
  }

  onRemoveOption(i: number){
    const radioOptions = <FormArray>this.controlForm.controls['options'];
    radioOptions.removeAt(i);
  }

}
