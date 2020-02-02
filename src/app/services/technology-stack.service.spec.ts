import { TestBed } from '@angular/core/testing';

import { TechnologyStackService } from './technology-stack.service';

describe('TechnologyStackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologyStackService = TestBed.get(TechnologyStackService);
    expect(service).toBeTruthy();
  });
});
