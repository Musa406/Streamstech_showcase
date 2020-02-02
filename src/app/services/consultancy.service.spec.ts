import { TestBed } from '@angular/core/testing';

import { ConsultancyService } from './consultancy.service';

describe('ConsultancyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultancyService = TestBed.get(ConsultancyService);
    expect(service).toBeTruthy();
  });
});
