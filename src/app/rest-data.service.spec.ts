import { TestBed, inject } from '@angular/core/testing';

import { RESTDataService } from './rest-data.service';

describe('RESTDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RESTDataService]
    });
  });

  it('should be created', inject([RESTDataService], (service: RESTDataService) => {
    expect(service).toBeTruthy();
  }));
});
