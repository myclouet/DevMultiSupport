import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let language: any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new LanguageService();
  });

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });

  it('should set and get the language', () => {
    expect(language).toBeUndefined();
    expect(service.getLanguage()).not.toEqual('en');
    expect(service.getLanguage()).toEqual('fr');
    service.setLanguage('en');
    expect(service.getLanguage()).toEqual('en');
    expect(service.getLanguage()).not.toEqual('fr');
  });
});
