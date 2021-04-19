import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktoraBirimiEkleComponent } from './doktora-birimi-ekle.component';

describe('DoktoraBirimiEkleComponent', () => {
  let component: DoktoraBirimiEkleComponent;
  let fixture: ComponentFixture<DoktoraBirimiEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktoraBirimiEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktoraBirimiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
