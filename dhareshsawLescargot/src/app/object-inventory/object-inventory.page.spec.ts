import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectInventoryPage } from './object-inventory.page';

describe('ObjectInventoryPage', () => {
  let component: ObjectInventoryPage;
  let fixture: ComponentFixture<ObjectInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
