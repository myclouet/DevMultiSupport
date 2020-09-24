import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryModalPage } from './history-modal.page';

describe('HistoryModalPage', () => {
  let component: HistoryModalPage;
  let fixture: ComponentFixture<HistoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
