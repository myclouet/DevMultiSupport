import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinLooseModalPage } from './win-loose-modal.page';

describe('WinLooseModalPage', () => {
  let component: WinLooseModalPage;
  let fixture: ComponentFixture<WinLooseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLooseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinLooseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
