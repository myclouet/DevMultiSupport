import { TestBed } from '@angular/core/testing';

import { ObjectInventoryService } from './object-inventory.service';

describe('ObjectInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjectInventoryService = TestBed.get(ObjectInventoryService);
    expect(service).toBeTruthy();
  });
});
