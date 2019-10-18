import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVenta2Component } from './formulario-venta2.component';

describe('FormularioVenta2Component', () => {
  let component: FormularioVenta2Component;
  let fixture: ComponentFixture<FormularioVenta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVenta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVenta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
