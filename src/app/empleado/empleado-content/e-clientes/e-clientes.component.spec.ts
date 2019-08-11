import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EClientesComponent } from './e-clientes.component';

describe('EClientesComponent', () => {
  let component: EClientesComponent;
  let fixture: ComponentFixture<EClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
