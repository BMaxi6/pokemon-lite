import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CertantApiService } from './certant-api.service';

describe('CertantApiService', () => {
  let service: CertantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CertantApiService]
    });
  });

  it('should be created', () => {
    const service: CertantApiService = TestBed.get(CertantApiService);
    expect(service).toBeTruthy();
  });
});
/*

 it('should have getData function', () => {
  const service: myService = TestBed.get(myService);
  expect(service.getData).toBeTruthy();
 });

 */