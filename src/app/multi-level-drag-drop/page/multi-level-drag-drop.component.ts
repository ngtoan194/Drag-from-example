import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { CdkDragDrop, moveItemInArray, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-multi-level-drag-drop',
  templateUrl: './multi-level-drag-drop.component.html',
  styleUrls: ['./multi-level-drag-drop.component.scss']
})
export class MultiLevelDragDropComponent implements OnInit {

  public parentItem: Item;
  public listLayout: any;
  public get connectedDropListsIds(): string[] {
    // We reverse ids here to respect items nesting hierarchy
    return this.getIdsRecursive(this.parentItem).reverse();
  }


  constructor() {
    this.parentItem = new Item({ name: 'parent-item' });
    this.listLayout = [
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
  }

  ngOnInit() {
    this.parentItem.children.push(new Item({
      name: 'test1',
      children: [
        new Item({ name: 'subItem1' }),
        new Item({ name: 'subItem2' }),
        new Item({ name: 'subItem3' })
      ]
    }));
    this.parentItem.children.push(new Item({
      name: 'test2',
      children: [
        new Item({ name: 'subItem4' }),
        new Item({ name: 'subItem5' }),
        new Item({
          name: 'subItem6', children: [
            new Item({ name: 'subItem8' })
          ]
        })
      ]
    }));
    this.parentItem.children.push(new Item({ name: 'test3' }));
  }

  public onDragDrop(event: CdkDragDrop<Item>) {
    event.container.element.nativeElement.classList.remove('active');
    debugger
    if (this.canBeDropped(event)) {
      const movingItem: Item = event.item.data;
      event.container.data.children.push(movingItem);
      event.previousContainer.data.children = event.previousContainer.data.children.filter((child) => child.uId !== movingItem.uId);
    } else {
      moveItemInArray(
        event.container.data.children,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  private getIdsRecursive(item: Item): string[] {
    let ids = [item.uId];
    item.children.forEach((childItem) => { ids = ids.concat(this.getIdsRecursive(childItem)) });
    return ids;
  }

  private canBeDropped(event: CdkDragDrop<Item, Item>): boolean {
    const movingItem: Item = event.item.data;

    return event.previousContainer.id !== event.container.id
      && this.isNotSelfDrop(event)
      && !this.hasChild(movingItem, event.container.data);
  }

  private isNotSelfDrop(event: CdkDragDrop<Item> | CdkDragEnter<Item> | CdkDragExit<Item>): boolean {
    return event.container.data.uId !== event.item.data.uId;
  }

  private hasChild(parentItem: Item, childItem: Item): boolean {
    const hasChild = parentItem.children.some((item) => item.uId === childItem.uId);
    return hasChild ? true : parentItem.children.some((item) => this.hasChild(item, childItem));
  }

}
