import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-control',
  templateUrl: './dialog-control.component.html',
  styleUrls: ['./dialog-control.component.scss']
})
export class DialogControlComponent implements OnInit {

  fromDrag: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogControlComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.buildForm();
    this.data = data;
    this.fromDrag.patchValue(data.control);
  }

  ngOnInit() {
  }

  // FORM
  // build form
  private buildForm() {
    this.fromDrag = this.fb.group({
      disabled: [''],
      label: [''],
      title: [''],
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

  save() {
    this.data.control = this.fromDrag.value
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }
}
