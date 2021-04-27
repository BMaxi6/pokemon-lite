import { TestBed } from '@angular/core/testing';

import { CertantApiService } from './certant-api.service';

describe('CertantApiService', () => {
  let service: CertantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
