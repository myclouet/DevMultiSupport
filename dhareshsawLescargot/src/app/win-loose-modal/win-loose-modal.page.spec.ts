import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinLooseModalPage } from './win-loose-modal.page';
import { NavParams } from '@ionic/angular';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateService } from 'jasmine';
import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


describe('WinLooseModalPage', () => {
  let component: WinLooseModalPage;
  let fixture: ComponentFixture<WinLooseModalPage>;

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
      providers: [WinLooseModalPage, NavParams, TranslateService] 
    }).compileComponents();

    fixture = TestBed.createComponent(WinLooseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
