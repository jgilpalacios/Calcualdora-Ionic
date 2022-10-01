import { TestBed } from '@angular/core/testing';

import { RomanoService } from './romano.service';

describe('RomanoService', () => {
  let service: RomanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
