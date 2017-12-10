import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalItemComponent } from './cal-item.component';

describe('CalItemComponent', () => {
  let component: CalItemComponent;
  let fixture: ComponentFixture<CalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
