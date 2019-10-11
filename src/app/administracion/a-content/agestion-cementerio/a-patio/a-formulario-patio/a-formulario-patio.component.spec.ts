import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioPatioComponent } from './a-formulario-patio.component';

describe('AFormularioPatioComponent', () => {
  let component: AFormularioPatioComponent;
  let fixture: ComponentFixture<AFormularioPatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioPatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
