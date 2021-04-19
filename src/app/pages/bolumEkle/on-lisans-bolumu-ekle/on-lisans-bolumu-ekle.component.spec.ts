import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLisansBolumuEkleComponent } from './on-lisans-bolumu-ekle.component';

describe('OnLisansBolumuEkleComponent', () => {
  let component: OnLisansBolumuEkleComponent;
  let fixture: ComponentFixture<OnLisansBolumuEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnLisansBolumuEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnLisansBolumuEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
