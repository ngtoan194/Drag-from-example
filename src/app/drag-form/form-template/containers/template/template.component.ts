import { Component } from '@angular/core';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogControlComponent } from 'src/app/drag-form/form-template/containers/template/dialog-control/dialog-control.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

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

  layouts: any[] = [
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
  ];

  droppedLayouts: any[] = [];

  data: any[] = [];

  dataCopy = {};

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

  }

  newLayout() {
    return this.layouts = [
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
    ];
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.newLayout();
    console.log("droppedLayouts: ", this.droppedLayouts);
  }

  addControl(layout, col, control) {
    if (control.name === 'paste') {
      this.droppedLayouts[layout].cols[col].control = this.dataCopy;
    } else {
      this.droppedLayouts[layout].cols[col].control = control;
    }
  }

  editControl(layout, col, control) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { layout, col, control };
    const dialogRef = this.dialog.open(DialogControlComponent, dialogConfig);
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