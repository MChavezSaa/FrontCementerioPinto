import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMostrarTerrenosComponent } from './c-mostrar-terrenos.component';

describe('CMostrarTerrenosComponent', () => {
  let component: CMostrarTerrenosComponent;
  let fixture: ComponentFixture<CMostrarTerrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMostrarTerrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMostrarTerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
