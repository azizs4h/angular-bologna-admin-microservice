import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadalComponent } from './anadal.component';

describe('AnadalComponent', () => {
  let component: AnadalComponent;
  let fixture: ComponentFixture<AnadalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
