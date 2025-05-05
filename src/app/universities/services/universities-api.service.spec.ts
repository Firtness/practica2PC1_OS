import { TestBed } from '@angular/core/testing';

import { UniversitiesApiService } from './universities-api.service';

describe('UniversitiesApiService', () => {
  let service: UniversitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
