import {
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import * as uuid from 'uuid';
import * as _ from 'lodash';
import { FormTemplate } from '../../models/form-template.model';
import { MatDialog, MatDialogConfig, MatTabLabel } from '@angular/material';
import { FormLayoutDialogComponent } from '../form-layout-dialog/form-layout-dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { FormLayout } from '../../models/form-layout.model';
import { FormControlItem } from '../../models/form-control-item.model';
import { FormColumn } from '../../models/form-column.model';
import { FormTab } from '../../models/form-tab.model';
import { FormTabItem } from '../../models/form-tab-item.model';
import { FormPanel } from '../../models/form-panel.model';
import { FormTable } from '../../models/form-table.model';
import { FormTableColumn } from '../../models/form-table-column.model';
import { FormTableData } from '../../models/form-table-data.model';

@Component({
  selector: 'app-form-template-item',
  templateUrl: './form-template-item.component.html',
  styleUrls: ['./form-template-item.component.scss']
})
export class FormTemplateItemComponent implements OnInit {
  formTemplate: FormTemplate;

  @Output() create = new EventEmitter<FormTemplate>();
  @Output() update = new EventEmitter<FormTemplate>();

  layouts: FormLayout[] = [
    {
      'id': '1',
      'name': 'col-12',
      'type': 'col-12',
      'columns': [
        {
          'id': '',
          'name': 'col-12',
          'type': 'col-12'
        }
      ]
    },
    {
      'id': '2',
      'name': 'col-6 col-6',
      'type': 'col-6 col-6',
      'columns': [
        {
          'id': '1',
          'name': 'col-6',
          'type': 'col-6'
        },
        {
          'id': '2',
          'name': 'col-6',
          'type': 'col-6'
        }
      ]
    },
    {
      'id': '3',
      'name': 'col-4 col-4 col-4',
      'type': 'col-4 col-4 col-4',
      'columns': [
        {
          'id': '1',
          'name': 'col-4',
          'type': 'col-4'
        },
        {
          'id': '2',
          'name': 'col-4',
          'type': 'col-4'
        },
        {
          'id': '3',
          'name': 'col-4',
          'type': 'col-4'
        }
      ]
    },
    {
      'id': '4',
      'name': 'col-3 col-3 col-3 col-3',
      'type': 'col-3 col-3 col-3 col-3',
      'columns': [
        {
          'id': '1',
          'name': 'col-3',
          'type': 'col-3'
        },
        {
          'id': '2',
          'name': 'col-3',
          'type': 'col-3'
        },
        {
          'id': '3',
          'name': 'col-3',
          'type': 'col-3'
        },
        {
          'id': '4',
          'name': 'col-3',
          'type': 'col-3'
        }
      ]
    },
    {
      'id': '5',
      'name': 'col-8 col-4',
      'type': 'col-8 col-4',
      'columns': [
        {
          'id': '1',
          'name': 'col-8',
          'type': 'col-8'
        },
        {
          'id': '2',
          'name': 'col-4',
          'type': 'col-4'
        }
      ]
    },
    {
      'id': '6',
      'name': 'col-4 col-8',
      'type': 'col-4 col-8',
      'columns': [
        {
          'id': '1',
          'name': 'col-4',
          'type': 'col-4'
        },
        {
          'id': '2',
          'name': 'col-8',
          'type': 'col-8'
        }
      ]
    }
  ];

  controls: FormControlItem[] = [
    {
      id: 1,
      name: 'Label',
      type: 'label',
      fontSize: 14,
      disabled: false,
    }, {
      id: 2,
      name: 'Text input',
      type: 'text',
      fontSize: 14,
      disabled: false,
    }, {
      id: 3,
      name: 'Text area',
      type: 'textarea',
      fontSize: 14,
      disabled: false,
    }, {
      id: 4,
      name: 'Number',
      type: 'number',
      fontSize: 14,
      disabled: false,
    }, {
      id: 5,
      name: 'Password',
      type: 'password',
      fontSize: 14,
      disabled: false,
    }, {
      id: 6,
      name: 'Checkbox',
      type: 'checkbox',
      fontSize: 14,
      disabled: false,
    },  {
      id: 7,
      name: 'Select Boxes',
      type: 'selectBoxes',
      fontSize: 14,
      disabled: false,
    }, {
      id: 8,
      name: 'Select',
      type: 'select',
      fontSize: 14,
      disabled: false,
    }, {
      id: 9,
      name: 'Radio',
      type: 'radio',
      fontSize: 14,
      disabled: false,
    }, {
      id: 10,
      name: 'Date',
      type: 'date',
      fontSize: 14,
      disabled: false,
    }, {
      id: 5,
      name: 'Button',
      type: 'button',
      fontSize: 14,
      disabled: false,
    }, {
      id: 12,
      name: 'Table',
      type: 'table',
      fontSize: 14,
      disabled: false,
    }, {
      id: 13,
      name: 'Url',
      type: 'url',
      fontSize: 14,
      disabled: false,
    }, {
      id: 14,
      name: 'File',
      type: 'file',
      fontSize: 14,
      disabled: false,
    }
  ];

  mainForm = this.fb.group({
    name: ['Template name', Validators.required],
    description: [''],
    version: [1, Validators.required],
    layouts: this.fb.array([]),
  });

  acceptFile: string = '';

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.formTemplate = {
      id: '1',
      name: 'Customer Form',
      description: 'Customer Form',
      version: 1,
      layouts: []
    };
  }

  dropLayout(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formTemplate.layouts, event.previousIndex, event.currentIndex);
  }

  onAddColumnElement(layoutType: any, colUId: any, elementType: any) {
    // Find column in layout and set control or table
    let column: FormColumn = Object.assign(this.findColInlayouts(colUId, this.formTemplate));
    if (column !== null) {
      // Case 1: Layouts->Columns->Column->Control
      if (layoutType === 'CONTROL') {
        const rawControl = this.controls.find(control => control.type === elementType);
        let options = [];
        if (rawControl.type === 'radio') {
          options = [{label: 'label 1', value: 'value 1'}, {label: 'label 2', value: 'value 2'}];
        }
        if (rawControl.type === 'selectBoxes') {
          options = [{label: 'label 1', value: 'value 1', name: 'name1'}, {label: 'label 2', value: 'value 2', name: 'name2'}];
        }
        if (rawControl.type === 'select') {
          options = [{label: 'select 1', value: 'value 1'}, {label: 'select 2', value: 'value 2'}];
        }
        if (rawControl.type === 'file') {
          options = [{file: '.doc'}, {file: '.xlsx'}, {file: '.png'}, {file: '.jpg'}]
          let acceptFile = '';
          options.forEach(item =>{
            acceptFile = acceptFile ? acceptFile.concat(', ' + item.file) : item.file;
          })
          this.acceptFile = acceptFile;
        }

        column.control = new FormControlItem({
          name: rawControl.name,
          type: rawControl.type,
          label: rawControl.label,
          options: rawControl.type === 'radio' ? options : 
                    rawControl.type === 'selectBoxes' ? options : 
                    rawControl.type === 'select' ? options :
                    rawControl.type === 'file' ? options : [],
          fontSize: rawControl.fontSize ? rawControl.fontSize : null,
          disabled: rawControl.disabled ? rawControl.disabled : false,
          isInline: rawControl.isInline ? rawControl.isInline : null,
          width: rawControl.width ? rawControl.width : null,
          isHorizontal: rawControl.isHorizontal ? rawControl.isHorizontal : false,
          placeholder: null,
          description: null,
          validation: [],
        });
      }

      // Case 2: Layouts->Columns->Column->Panel
      if (layoutType === 'PANEL') {
        let panel: FormPanel = {};
        panel.name = 'Panel',
          panel.title = 'Panel title',
          panel.layouts = [];

        column.panel = panel;
      }

      // Case 3: Layouts->Columns->Column->Tab->TabItems
      if (layoutType === 'TAB') {
        let tab: FormTab = {};
        tab.name = 'Tab';
        tab.items = [];
        tab.items.push(new FormTabItem({
          title: 'Tab 1',
          displayOrder: 1
        }));
        tab.items.push(new FormTabItem({
          title: 'Tab 2',
          displayOrder: 2
        }));

        column.tab = tab;
      }

      // Case 4: Layouts->Columns->Column->Table
      if (layoutType === 'TABLE') {
        let table: FormTable = {};
        table.name = 'Table';
        table.dataSource = 'dataSource'
        table.columns = [];
        table.columns.push(new FormTableColumn({
          columnName: '#',
          columnKey: '',
        }));
        table.columns.push(new FormTableColumn({
          columnName: 'Column 1',
          columnKey: 'column1',
        }));
        table.columns.push(new FormTableColumn({
          columnName: 'Column 2',
          columnKey: 'column2',
        }));
        table.columns.push(new FormTableColumn({
          columnName: 'Column 3',
          columnKey: 'column3',
        }));
        table.data = [];
        table.data.push(new FormTableData({
          data: {
            column1: 'Data 1',
            column2: 'Data 2',
            column3: 'Data 3',
          },
        }));
        column.table = table;
      }
    }
  }

  onRemoveColumnElement(layoutType: any, colUId: any) {
    // Find column in layout and set control or table
    let column: FormColumn = Object.assign(this.findColInlayouts(colUId, this.formTemplate));
    if (column !== null) {
      // Case 1: Layouts->Columns->Column->Control
      if (layoutType === 'CONTROL') {
        column.control = null;
      }

      // Case 2: Layouts->Columns->Column->Panel
      if (layoutType === 'PANEL') {
        column.panel = null;
      }

      // Case 3: Layouts->Columns->Column->Tab->TabItem1
      if (layoutType === 'TAB') {
        column.tab = null;
      }

      // Case 4: Layouts->Columns->Column->Table
      if (layoutType === 'TABLE') {
        column.table = null;
      }
    }
  }

  onEditColumnElement(layoutType: any, colUId: any, data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { layoutType, data };
    const dialogRef = this.dialog.open(FormLayoutDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        let column: FormColumn = Object.assign(this.findColInlayouts(colUId, this.formTemplate));
        if (layoutType === 'PANEL') {
          column.panel.title = response.title;
        } 
        if (layoutType === 'TAB') {
          let currentTabItems: FormTabItem[] = data.items;
          let newTabItems: FormTabItem[] = response.items;

          // Set layout for new tabs
          for (let newTab of newTabItems) {
            for (let currentTab of currentTabItems) {
              if (newTab.uId === currentTab.uId) {
                newTab.layouts = currentTab.layouts;
              } else {
                newTab.layouts = [];
              }
            }
          }
          column.tab.items = newTabItems;
        } 
        if (layoutType === 'CONTROL') {
          column.control.name = response.name ? response.name : column.control.name;
          column.control.placeholder = response.placeholder ? response.placeholder : column.control.placeholder;
          column.control.description = response.description ? response.description : column.control.description;
          column.control.defaultValue = response.defaultValue ? response.defaultValue : column.control.defaultValue;
          column.control.validation = response.validation ? response.validation : column.control.validation;
          column.control.fontSize = response.fontSize ? response.fontSize : column.control.fontSize;
          column.control.disabled = response.disabled === 'true' ? true : response.disabled === true ? true : false;
          column.control.isInline = response.isInline === 'true' ? true : response.isInline === true ? true : false;
          column.control.isHorizontal = response.isHorizontal === 'true' ? true : response.isHorizontal === true ? true : false;
          column.control.width = response.width ? response.width : column.control.width;
          column.control.options = response.options ? response.options : column.control.options;
        }
        if (layoutType === 'TABLE'){
          column.table.columns = response.columns ? response.columns : column.table.columns;
        }
      }
    });
  }

  findColInlayouts(uId: any, formTenplate: FormTemplate): FormColumn {
    for (let layout of formTenplate.layouts) {
      for (let col of layout.columns) {
        // Case 1: Layouts->Columns
        if (col.uId === uId) {
          return col;
        }

        // Case 2: Layouts->Columns->Panel->Layouts->Columns
        if (col.panel) {
          for (let layout of col.panel.layouts) {
            for (let col of layout.columns) {
              if (col.uId === uId) {
                return col;
              }
            }
          }
        }

        // Case 3: Layouts->Columns->Tabs->TabItem->Layouts->Columns
        if (col.tab) {
          for (let tabItem of col.tab.items) {
            for (let layout of tabItem.layouts) {
              for (let col of layout.columns) {
                if (col.uId === uId) {
                  return col;
                }
              }
            }
          }
        }
      }
    }
    return null;
  }

  onCreateLayout(layoutType: any, colUId: any, tabOrPanel: any, optionIndex: any) {
    const dialogConfig = new MatDialogConfig();
    const layouts = this.layouts;
    dialogConfig.data = { layoutType, layouts };
    const dialogRef = this.dialog.open(FormLayoutDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      if (response && layoutType === 'LAYOUT') {
        if (colUId === null) {
          this.formTemplate.layouts.push(this.createLayout(response.id));
        } else {
          let column: FormColumn = Object.assign(this.findColInlayouts(colUId, this.formTemplate));
          if (tabOrPanel === 'PANEL') {
            column.panel.layouts.push(this.createLayout(response.id));
          }

          if (tabOrPanel === 'TAB') {
            column.tab.items[optionIndex].layouts.push(this.createLayout(response.id));
          }
        }
      }
    });
  }

  private createLayout(layoutId: string): FormLayout {
    // Create new column
    let insertColumns: FormColumn[] = [];
    const rawLayout = this.layouts.find(layout => layout.id === layoutId);
    rawLayout.columns.forEach(function (col: FormControlItem) {
      insertColumns.push(new FormColumn({
        name: col.name,
        type: col.type
      }));
    });

    // Create new layout
    return new FormLayout({ id: rawLayout.id, name: rawLayout.name, type: rawLayout.type, columns: insertColumns });
  }

  onRemoveLayout(uId: any): boolean {
    for (let layout of this.formTemplate.layouts) {

      // Case 1: Form->layouts
      if (layout.uId === uId) {
        _.remove(this.formTemplate.layouts, { uId: uId });
        return true;
      }

      for (let col of layout.columns) {
        // Case 2: Layouts->Columns->Panel->Layouts
        if (col.panel) {
          for (let layout of col.panel.layouts) {
            if (layout.uId === uId) {
              _.remove(col.panel.layouts, { uId: uId });
              return true;
            }
          }
        }

        // Case 3: Layouts->Columns->Tabs->TabItem->Layouts
        if (col.tab) {
          for (let tabItem of col.tab.items) {
            for (let layout of tabItem.layouts) {
              if (layout.uId === uId) {
                _.remove(tabItem.layouts, { uId: uId });
                return true;
              }
            }
          }
        }
      }
    }

    return false;
  }

  showDataTable(data, columnKey) {
    Object.keys(data).forEach(function(key) {
      var value = data[key];
    });
    return "strimng";
  }


  fileChange(event){
    if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
      return;
    }
  
    const name = event.target.files[0].name;
    const lastDot = name.lastIndexOf('.');
  
    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);
  
    // outputfile.value = fileName;
    // extension.value = ext;
  }
}
