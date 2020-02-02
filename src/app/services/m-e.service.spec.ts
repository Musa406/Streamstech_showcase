import { TestBed } from '@angular/core/testing';

import { MEService } from './m-e.service';

describe('MEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MEService = TestBed.get(MEService);
    expect(service).toBeTruthy();
  });
});
