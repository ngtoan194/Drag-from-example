import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateItemComponent } from './form-template-item.component';

describe('FormTemplateItemComponent', () => {
  let component: FormTemplateItemComponent;
  let fixture: ComponentFixture<FormTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
