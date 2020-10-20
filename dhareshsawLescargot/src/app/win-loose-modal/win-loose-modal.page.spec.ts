import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from '../services/language.service';
import { WinLooseModalPage } from './win-loose-modal.page';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('WinLooseModalPage', () => {
  let component: WinLooseModalPage;
  let fixture: ComponentFixture<WinLooseModalPage>;
  let translateService : TranslateService;
  let languageService: LanguageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLooseModalPage ],
      imports: [IonicModule.forRoot(), HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })],
      providers: [WinLooseModalPage, NavParams, TranslateService, LanguageService] 
    }).compileComponents();

    fixture = TestBed.createComponent(WinLooseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    languageService = TestBed.get(LanguageService);
    translateService = TestBed.get(TranslateService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return good string values', () => {
    expect(component.modalTitle).toEqual('Résultat');
    expect(component.messageWin).toEqual('Tu as gagné !');
    expect(component.messageLoose).toEqual('Tu as perdu !');
    expect(component.messageContinuerJeu).toEqual('Continuer le jeu');
  });

});
