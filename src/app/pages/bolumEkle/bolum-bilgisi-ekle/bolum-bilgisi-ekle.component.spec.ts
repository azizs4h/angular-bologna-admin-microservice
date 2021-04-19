import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolumBilgisiEkleComponent } from './bolum-bilgisi-ekle.component';

describe('BolumBilgisiEkleComponent', () => {
  let component: BolumBilgisiEkleComponent;
  let fixture: ComponentFixture<BolumBilgisiEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolumBilgisiEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumBilgisiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
