import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-form',
  templateUrl: './dialog-create-form.component.html',
  styleUrls: ['./dialog-create-form.component.scss']
})
export class DialogCreateFormComponent implements OnInit {

  fromDrag: FormGroup;

  form = this.fb.group({
    disabled: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm();
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

}
