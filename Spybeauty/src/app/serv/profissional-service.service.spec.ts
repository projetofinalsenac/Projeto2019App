import { TestBed } from '@angular/core/testing';

import { ProfissionalServiceService } from './profissional-service.service';

describe('ProfissionalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionalServiceService = TestBed.get(ProfissionalServiceService);
    expect(service).toBeTruthy();
  });
});
