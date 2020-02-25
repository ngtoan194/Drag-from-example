import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlItemComponent } from './form-control-item.component';

describe('FormControlItemComponent', () => {
  let component: FormControlItemComponent;
  let fixture: ComponentFixture<FormControlItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
