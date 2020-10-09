import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  language = 'fr';

  public getLanguage() {
    return this.language;
  }

  public setLanguage(language: string) {
    this.language = language;
  }

}
