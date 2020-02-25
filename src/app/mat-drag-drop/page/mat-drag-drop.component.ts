import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mat-drag-drop',
  templateUrl: './mat-drag-drop.component.html',
  styleUrls: ['./mat-drag-drop.component.scss']
})
export class MatDragDropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  structures = [
    { id: 1, type: 'col12', name: '', disabled: false },
    { id: 2, type: 'col66', name: '', disabled: false },
    { id: 3, type: 'col444', name: '', disabled: false },
    { id: 4, type: 'col3333', name: '', disabled: false },
    { id: 5, type: 'col48', name: '', disabled: false },
    { id: 6, type: 'col84', name: '', disabled: false },
  ];

  todo = [
    { id: 1, type: 'date', name: 'Date', disabled: false },
    { id: 2, type: 'label', name: 'Label', disabled: false },
    { id: 3, type: 'text', name: 'Input text', disabled: false },
    { id: 4, type: 'select', name: 'Select', disabled: false },
    { id: 5, type: 'button', name: 'Button', disabled: false },
    { id: 6, type: 'empty', name: '', disabled: false },
  ];

  done = [];

  review = [];

  test = [];

  layout = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      console.log('layout', this.layout);
      this.structures = [
        { id: 1, type: 'col12', name: '', disabled: false },
        { id: 2, type: 'col66', name: '', disabled: false },
        { id: 3, type: 'col444', name: '', disabled: false },
        { id: 4, type: 'col3333', name: '', disabled: false },
        { id: 5, type: 'col48', name: '', disabled: false },
        { id: 6, type: 'col84', name: '', disabled: false },
      ];

      this.todo = [
        { id: 1, type: 'date', name: 'Date', disabled: false },
        { id: 2, type: 'label', name: 'Label', disabled: false },
        { id: 3, type: 'text', name: 'Input text', disabled: false },
        { id: 4, type: 'select', name: 'Select', disabled: false },
        { id: 5, type: 'button', name: 'Button', disabled: false },
        { id: 6, type: 'empty', name: '', disabled: false },
      ];
    }
  }

  addLabel(item) {
    debugger
  }

  addInput(item) {

  }
  addSelect(item) {

  }
  addButton(item) {

  }

}
