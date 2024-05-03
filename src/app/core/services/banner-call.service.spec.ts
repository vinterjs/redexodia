import { TestBed } from '@angular/core/testing';

import { BannerCallService } from './banner-call.service';

describe('BannerCallService', () => {
  let service: BannerCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
