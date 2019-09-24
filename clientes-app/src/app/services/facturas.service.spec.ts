import { TestBed } from '@angular/core/testing';

import { FacturasService } from './facturas.service';

describe('FacturasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturasService = TestBed.get(FacturasService);
    expect(service).toBeTruthy();
  });
});
