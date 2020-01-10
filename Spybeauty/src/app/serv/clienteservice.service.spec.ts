import { TestBed } from '@angular/core/testing';

import { ClienteserviceService } from './clienteservice.service';

describe('ClienteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteserviceService = TestBed.get(ClienteserviceService);
    expect(service).toBeTruthy();
  });
});
