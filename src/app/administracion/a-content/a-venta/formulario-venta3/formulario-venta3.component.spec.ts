import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVenta3Component } from './formulario-venta3.component';

describe('FormularioVenta3Component', () => {
  let component: FormularioVenta3Component;
  let fixture: ComponentFixture<FormularioVenta3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVenta3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVenta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
