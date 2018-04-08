import { TestBed, inject } from '@angular/core/testing';

import { StatsService } from './stats.service';

describe('Stats.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsService]
    });
  });

  it('should be created', inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));
});
