import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuksekLisansBolumuEkleComponent } from './yuksek-lisans-bolumu-ekle.component';

describe('YuksekLisansBolumuEkleComponent', () => {
  let component: YuksekLisansBolumuEkleComponent;
  let fixture: ComponentFixture<YuksekLisansBolumuEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuksekLisansBolumuEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuksekLisansBolumuEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
