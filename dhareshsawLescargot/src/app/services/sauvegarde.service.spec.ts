import { TestBed } from '@angular/core/testing';

import { SauvegardeService } from './sauvegarde.service';

describe('SauvegardeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SauvegardeService = TestBed.get(SauvegardeService);
    expect(service).toBeTruthy();
  });
});
