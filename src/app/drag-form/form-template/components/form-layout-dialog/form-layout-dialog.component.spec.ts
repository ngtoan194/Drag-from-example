import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutDialogComponent } from './form-layout-dialog.component';

describe('FormLayoutDialogComponent', () => {
  let component: FormLayoutDialogComponent;
  let fixture: ComponentFixture<FormLayoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
