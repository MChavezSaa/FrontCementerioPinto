import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarventaComponent } from './formulario-editarventa.component';

describe('FormularioEditarventaComponent', () => {
  let component: FormularioEditarventaComponent;
  let fixture: ComponentFixture<FormularioEditarventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditarventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
