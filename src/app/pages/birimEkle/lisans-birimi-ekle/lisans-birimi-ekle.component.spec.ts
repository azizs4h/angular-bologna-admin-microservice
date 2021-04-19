import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisansBirimiEkleComponent } from './lisans-birimi-ekle.component';

describe('LisansBirimiEkleComponent', () => {
  let component: LisansBirimiEkleComponent;
  let fixture: ComponentFixture<LisansBirimiEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisansBirimiEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisansBirimiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
