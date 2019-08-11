import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EVerMapaTerrenoComponent } from './e-ver-mapa-terreno.component';

describe('EVerMapaTerrenoComponent', () => {
  let component: EVerMapaTerrenoComponent;
  let fixture: ComponentFixture<EVerMapaTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EVerMapaTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EVerMapaTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
