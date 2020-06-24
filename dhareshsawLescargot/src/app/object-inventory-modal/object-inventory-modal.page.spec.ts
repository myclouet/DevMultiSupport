import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectInventoryModalPage } from './object-inventory-modal.page';

describe('ObjectInventoryModalPage', () => {
  let component: ObjectInventoryModalPage;
  let fixture: ComponentFixture<ObjectInventoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectInventoryModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectInventoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
