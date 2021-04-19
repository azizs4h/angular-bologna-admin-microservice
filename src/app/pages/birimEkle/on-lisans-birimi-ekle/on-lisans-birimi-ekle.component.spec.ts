import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLisansBirimiEkleComponent } from './on-lisans-birimi-ekle.component';

describe('OnLisansBirimiEkleComponent', () => {
  let component: OnLisansBirimiEkleComponent;
  let fixture: ComponentFixture<OnLisansBirimiEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnLisansBirimiEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnLisansBirimiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
