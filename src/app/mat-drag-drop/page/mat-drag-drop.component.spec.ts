import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDragDropComponent } from './mat-drag-drop.component';

describe('MatDragDropComponent', () => {
  let component: MatDragDropComponent;
  let fixture: ComponentFixture<MatDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
