import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormularioCementerioComponent } from './a-formulario-cementerio.component';

describe('AFormularioCementerioComponent', () => {
  let component: AFormularioCementerioComponent;
  let fixture: ComponentFixture<AFormularioCementerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFormularioCementerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFormularioCementerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
