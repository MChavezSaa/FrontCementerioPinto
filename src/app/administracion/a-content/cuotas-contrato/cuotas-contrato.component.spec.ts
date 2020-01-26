import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasContratoComponent } from './cuotas-contrato.component';

describe('CuotasContratoComponent', () => {
  let component: CuotasContratoComponent;
  let fixture: ComponentFixture<CuotasContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotasContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotasContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
