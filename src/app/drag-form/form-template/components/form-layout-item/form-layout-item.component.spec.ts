import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutItemComponent } from './form-layout-item.component';

describe('FormLayoutItemComponent', () => {
  let component: FormLayoutItemComponent;
  let fixture: ComponentFixture<FormLayoutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
