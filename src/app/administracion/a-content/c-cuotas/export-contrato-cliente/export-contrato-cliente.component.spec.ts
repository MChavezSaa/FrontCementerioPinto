import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContratoClienteComponent } from './export-contrato-cliente.component';

describe('ExportContratoClienteComponent', () => {
  let component: ExportContratoClienteComponent;
  let fixture: ComponentFixture<ExportContratoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportContratoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContratoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
