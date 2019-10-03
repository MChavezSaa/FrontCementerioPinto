import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EVentaDerechoComponent } from './e-venta-derecho.component';

describe('EVentaDerechoComponent', () => {
  let component: EVentaDerechoComponent;
  let fixture: ComponentFixture<EVentaDerechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EVentaDerechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EVentaDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
