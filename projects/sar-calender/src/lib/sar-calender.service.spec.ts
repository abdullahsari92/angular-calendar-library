import { TestBed } from '@angular/core/testing';

import { SarCalendarService } from './sar-calender.service';

describe('SarCalendarService', () => {
  let service: SarCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
