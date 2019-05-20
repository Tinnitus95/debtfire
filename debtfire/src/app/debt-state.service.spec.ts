import { TestBed } from '@angular/core/testing';

import { DebtStateService } from './debt-state.service';

describe('DebtStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebtStateService = TestBed.get(DebtStateService);
    expect(service).toBeTruthy();
  });
});
