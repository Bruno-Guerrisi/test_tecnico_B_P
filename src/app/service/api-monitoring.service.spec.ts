import { TestBed } from '@angular/core/testing';

import { ApiMonitoringService } from './api-monitoring.service';

describe('ApiMonitoringService', () => {
  let service: ApiMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
