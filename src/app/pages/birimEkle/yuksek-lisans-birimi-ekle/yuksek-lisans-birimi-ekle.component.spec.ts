import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuksekLisansBirimiEkleComponent } from './yuksek-lisans-birimi-ekle.component';

describe('YuksekLisansBirimiEkleComponent', () => {
  let component: YuksekLisansBirimiEkleComponent;
  let fixture: ComponentFixture<YuksekLisansBirimiEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuksekLisansBirimiEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuksekLisansBirimiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
