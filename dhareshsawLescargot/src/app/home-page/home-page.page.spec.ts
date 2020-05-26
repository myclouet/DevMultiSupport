import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePagePage } from './home-page.page';

describe('HomePagePage', () => {
  let component: HomePagePage;
  let fixture: ComponentFixture<HomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
