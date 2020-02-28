import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Input() parentItem?: Item;
  @Input() public set connectedDropListsIds(ids: string[]) {
    this.allDropListsIds = ids;
  }
  public get connectedDropListsIds(): string[] {
    return this.allDropListsIds.filter((id) => id !== this.item.uId);
  }
  public allDropListsIds: string[];

  public get dragDisabled(): boolean {
    return !this.parentItem;
  }

  public get parentItemId(): string {
    return this.dragDisabled ? '' : this.parentItem.uId;
  }

  @Output() itemDrop: EventEmitter<CdkDragDrop<Item>>

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

  constructor() {
    this.allDropListsIds = [];
    this.itemDrop = new EventEmitter();
  }

  ngOnInit() {
    console.log('parentItem:', this.parentItem);
    console.log('item:', this.item);
  }

  public onDragDrop(event: CdkDragDrop<Item, Item>): void {
    this.itemDrop.emit(event);
    
  }

}
