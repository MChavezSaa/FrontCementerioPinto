import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioCreartumbaComponent } from './a-formulario-creartumba.component';

describe('AFormularioCreartumbaComponent', () => {
  let component: AFormularioCreartumbaComponent;
  let fixture: ComponentFixture<AFormularioCreartumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioCreartumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioCreartumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
