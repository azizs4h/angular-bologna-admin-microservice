import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisansBolumuEkleComponent } from './lisans-bolumu-ekle.component';

describe('LisansBolumuEkleComponent', () => {
  let component: LisansBolumuEkleComponent;
  let fixture: ComponentFixture<LisansBolumuEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisansBolumuEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisansBolumuEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
