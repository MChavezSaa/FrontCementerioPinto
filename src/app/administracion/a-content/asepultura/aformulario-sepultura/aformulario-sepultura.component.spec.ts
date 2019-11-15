import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioSepulturaComponent } from './aformulario-sepultura.component';

describe('AFormularioSepulturaComponent', () => {
  let component: AFormularioSepulturaComponent;
  let fixture: ComponentFixture<AFormularioSepulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioSepulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioSepulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
