import { TestBed } from '@angular/core/testing';

import { WeekService } from './week.service';

describe('WeekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekService = TestBed.get(WeekService);
    expect(service).toBeTruthy();
  });
});
