import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDirectiveComponent } from './control-directive.component';

describe('ControlDirectiveComponent', () => {
  let component: ControlDirectiveComponent;
  let fixture: ComponentFixture<ControlDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
