import { TestBed } from '@angular/core/testing';

import { FactorizaService } from './factoriza.service';

describe('FactorizaService', () => {
  let service: FactorizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
