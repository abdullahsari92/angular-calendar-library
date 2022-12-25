import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarCalendarComponent } from './sar-calendar.component';

describe('SarCalendarComponent', () => {
  let component: SarCalendarComponent;
  let fixture: ComponentFixture<SarCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
