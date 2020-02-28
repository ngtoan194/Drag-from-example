import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelDragDropComponent } from './multi-level-drag-drop.component';

describe('MultiLevelDragDropComponent', () => {
  let component: MultiLevelDragDropComponent;
  let fixture: ComponentFixture<MultiLevelDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLevelDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
