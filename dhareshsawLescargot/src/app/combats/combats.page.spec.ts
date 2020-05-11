import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CombatsPage } from './combats.page';

describe('CombatsPage', () => {
  let component: CombatsPage;
  let fixture: ComponentFixture<CombatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CombatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
