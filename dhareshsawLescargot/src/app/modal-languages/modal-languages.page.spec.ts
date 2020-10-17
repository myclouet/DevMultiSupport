import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from '../services/language.service';
import { ModalLanguagesPage } from "./modal-languages.page";

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('ModalLanguagesPage', () => {
  let component: ModalLanguagesPage;
  let fixture: ComponentFixture<ModalLanguagesPage>;
  let translateService : TranslateService;
  let languageService: LanguageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLanguagesPage ],
      imports: [IonicModule.forRoot(), HttpClientModule,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }) ],
      providers: [TranslateService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLanguagesPage);
    component = fixture.componentInstance;
    translateService = TestBed.get(TranslateService);
    languageService = TestBed.get(LanguageService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setLanguage method', () => {
    spyOn(languageService, 'setLanguage');
    
    component.languageSelected('fr');
    expect(languageService.setLanguage).toHaveBeenCalled();
    expect(component.titleLanguageModal).toEqual('Langues');
    
    component.languageSelected('en');
    expect(languageService.setLanguage).toHaveBeenCalledWith('en');
  });
});
