import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMostrarCuotasComponent } from './c-mostrar-cuotas.component';

describe('CMostrarCuotasComponent', () => {
  let component: CMostrarCuotasComponent;
  let fixture: ComponentFixture<CMostrarCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMostrarCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMostrarCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
