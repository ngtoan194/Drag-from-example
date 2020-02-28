import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateFormComponent } from './dialog-create-form.component';

describe('DialogCreateFormComponent', () => {
  let component: DialogCreateFormComponent;
  let fixture: ComponentFixture<DialogCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
