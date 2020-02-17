import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDayComponent } from './test-day.component';

describe('TestDayComponent', () => {
  let component: TestDayComponent;
  let fixture: ComponentFixture<TestDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
