import { TestBed } from '@angular/core/testing';

import { ApiurlsService } from './apiurls.service';

describe('ApiurlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiurlsService = TestBed.get(ApiurlsService);
    expect(service).toBeTruthy();
  });
});
