import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CReglamentoClientesComponent } from './creglamento-clientes.component';

describe('CReglamentoClientesComponent', () => {
  let component: CReglamentoClientesComponent;
  let fixture: ComponentFixture<CReglamentoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CReglamentoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CReglamentoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
