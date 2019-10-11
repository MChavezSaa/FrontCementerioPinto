import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioTumbaComponent } from './a-formulario-tumba.component';

describe('AFormularioTumbaComponent', () => {
  let component: AFormularioTumbaComponent;
  let fixture: ComponentFixture<AFormularioTumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioTumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioTumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
