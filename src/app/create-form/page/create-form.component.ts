import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogCreateFormComponent } from '../dialog-create-form/dialog-create-form.component';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  controlFrames: any[] = [
    { 'id': 1, 'name': 'layout', 'type': 'layout', 'title': 'Layout', 'label': 'Layout', 'class': 'fa fa-columns', 'disabled': false, },
    { 'id': 2, 'name': 'panel', 'type': 'panel', 'title': 'Panel', 'label': 'Panel', 'class': 'fa fa-list-alt', 'disabled': false, },
    { 'id': 3, 'name': 'table', 'type': 'table', 'title': 'Table', 'label': 'Table', 'class': 'fa fa-table', 'disabled': false, },
    { 'id': 4, 'name': 'tabs', 'type': 'tabs', 'title': 'Tabs', 'label': 'Tabs', 'class': 'fa fa-folder-o', 'disabled': false, },
    { 'id': 5, 'name': 'well', 'type': 'well', 'title': 'Well', 'label': 'Well', 'class': 'fa fa-square-o', 'disabled': false, },
  ];

  layout: any[] = [
    {
      'layoutId': 1,
      'layoutType': '12',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-12',
          'control': null
        }
      ]
    },
    {
      'layoutId': 2,
      'layoutType': '6-6',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-6',
          'control': null
        },
        {
          'colId': 2,
          'colType': 'col-6',
          'control': null
        }
      ]
    },
    {
      'layoutId': 3,
      'layoutType': '4-4-4',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-4',
          'control': null
        },
        {
          'colId': 2,
          'colType': 'col-4',
          'control': null
        },
        {
          'colId': 3,
          'colType': 'col-4',
          'control': null
        }
      ]
    },
    {
      'layoutId': 4,
      'layoutType': '3-3-3-3',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-3',
          'control': null
        },
        {
          'colId': 2,
          'colType': 'col-3',
          'control': null
        },
        {
          'colId': 3,
          'colType': 'col-3',
          'control': null
        },
        {
          'colId': 4,
          'colType': 'col-3',
          'control': null
        }
      ]
    },
    {
      'layoutId': 5,
      'layoutType': '4-8',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-4',
          'control': null
        },
        {
          'colId': 2,
          'colType': 'col-8',
          'control': null
        }
      ]
    },
    {
      'layoutId': 6,
      'layoutType': '8-4',
      'cols': [
        {
          'colId': 1,
          'colType': 'col-8',
          'control': null
        },
        {
          'colId': 2,
          'colType': 'col-4',
          'control': null
        }
      ]
    },
  ]

  droppedLayouts: any[] = [];

  controls: any[] = [
    { 'id': 1, 'name': 'textField', 'type': 'text', 'title': 'Text Field', 'label': 'Text Field', 'class': 'fa fa-text-width', 'disabled': false, },
    { 'id': 2, 'name': 'select', 'type': 'select', 'title': 'Select', 'label': 'Select', 'class': 'fa fa-th-list', 'disabled': false, },
    { 'id': 3, 'name': 'button', 'type': 'submit', 'title': 'Submit', 'label': 'Submit', 'class': 'fa fa-stop', 'disabled': false, },
  ];

  controlsDrop: any[] = [
    { 'id': 4, 'name': 'textArea', 'type': 'text', 'title': 'Text Area', 'label': 'Text Area', 'class': 'fa fa-font', 'disabled': false, },
    { 'id': 5, 'name': 'number', 'type': 'text', 'title': 'Number', 'label': 'Number', 'class': 'fa fa-hashtag', 'disabled': false, },
    { 'id': 6, 'name': 'password', 'type': 'password', 'title': 'Password', 'label': 'Password', 'class': 'fa fa-asterisk', 'disabled': false, },
    { 'id': 7, 'name': 'checkbox', 'type': 'checkbox', 'title': 'Checkbox', 'label': 'Checkbox', 'class': 'fa fa-check-square', 'disabled': false, },
    { 'id': 8, 'name': 'date', 'type': 'text', 'title': 'Date', 'label': 'Date/Time', 'class': 'fa fa-calendar', 'disabled': false, },
    // { 'id': 9, 'name': 'copy', 'type': 'copy', 'title': 'Copy', 'label': 'Copy', 'class': 'fa fa-clone', 'disabled': false, },
    { 'id': 9, 'name': 'paste', 'type': 'paste', 'title': 'paste', 'label': 'Paste', 'class': 'fa fa-files-o', 'disabled': false, },
    { 'id': 10, 'name': 'table', 'type': 'table', 'title': 'Table', 'label': 'Table', 'class': 'fa fa-th', 'disabled': false, },
  ];

  dataCopy = {};

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  addCol(layoutIndex) {
    let data;
    debugger
    data = data.clone(this.layout[layoutIndex])
    this.droppedLayouts.push(data);
    this.addUidCol(this.droppedLayouts.length - 1)
  }

  addUidCol(layoutIndex) {
    let myId = uuid.v4();
    let col = this.droppedLayouts[layoutIndex];
    col.uid = myId;
    console.log(this.droppedLayouts);
  }

  addControl(layout, col, control) {
    if (control.name === 'paste') {
      this.droppedLayouts[layout].cols[col].control = this.dataCopy;
    } else {
      this.droppedLayouts[layout].cols[col].control = control;
      this.addUidControl(this.droppedLayouts[layout].cols[col].control);
    }
    console.log('droppedLayouts: ', this.droppedLayouts);
  }

  addUidControl(item) {
    let myId = uuid.v4();
    item.uId= myId;
    console.log(this.droppedLayouts);
  }

  editControl(layout, col, control) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { layout, col, control };
    const dialogRef = this.dialog.open(DialogCreateFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result.control) {
        this.droppedLayouts[result.layout].cols[result.col].control = result.control;
      }

    });
  }

  copyControl(layout, col, control) {
    this.dataCopy = control;
  }


  removeControl(layout, col, control) {
    this.droppedLayouts[layout].cols[col].control = null;
  }

  copyLayout(layoutIndex) {
    let layout = this.droppedLayouts[layoutIndex];

    this.droppedLayouts.splice(layoutIndex, -1, this.droppedLayouts[layoutIndex]);

    // this.droppedLayouts.push(this.droppedLayouts[layoutIndex]);
    console.log('droppedLayouts', this.droppedLayouts)
  }

  removeLayout(layout) {
    this.droppedLayouts.splice(layout, 1);
  }
}
