import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScenePage } from './scene.page';

describe('ScenePage', () => {
  let component: ScenePage;
  let fixture: ComponentFixture<ScenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
