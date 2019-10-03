import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormularioVentaComponent } from './e-formulario-venta.component';

describe('EFormularioVentaComponent', () => {
  let component: EFormularioVentaComponent;
  let fixture: ComponentFixture<EFormularioVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormularioVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormularioVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
