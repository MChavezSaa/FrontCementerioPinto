import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioFuncionarioComponent } from './aformulario-funcionario.component';

describe('AFormularioFuncionarioComponent', () => {
  let component: AFormularioFuncionarioComponent;
  let fixture: ComponentFixture<AFormularioFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
