import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktoraBolumuEkleComponent } from './doktora-bolumu-ekle.component';

describe('DoktoraBolumuEkleComponent', () => {
  let component: DoktoraBolumuEkleComponent;
  let fixture: ComponentFixture<DoktoraBolumuEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktoraBolumuEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktoraBolumuEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
