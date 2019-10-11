import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioTerrenoComponent } from './a-formulario-terreno.component';

describe('AFormularioTerrenoComponent', () => {
  let component: AFormularioTerrenoComponent;
  let fixture: ComponentFixture<AFormularioTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
