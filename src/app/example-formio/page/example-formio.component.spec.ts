import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormioComponent } from './example-formio.component';

describe('ExampleFormioComponent', () => {
  let component: ExampleFormioComponent;
  let fixture: ComponentFixture<ExampleFormioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFormioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
