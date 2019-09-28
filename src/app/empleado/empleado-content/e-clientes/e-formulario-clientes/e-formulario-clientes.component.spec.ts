import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormularioClientesComponent } from './e-formulario-clientes.component';

describe('EFormularioClientesComponent', () => {
  let component: EFormularioClientesComponent;
  let fixture: ComponentFixture<EFormularioClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormularioClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormularioClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
