import { TestBed } from '@angular/core/testing';

import { NgxQuoteLooperService } from './ngx-quote-looper.service';

describe('NgxQuoteLooperService', () => {
  let service: NgxQuoteLooperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxQuoteLooperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
