import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemChildrenComponent } from './list-item-children.component';

describe('ListItemChildrenComponent', () => {
  let component: ListItemChildrenComponent;
  let fixture: ComponentFixture<ListItemChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
