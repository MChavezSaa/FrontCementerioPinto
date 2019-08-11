import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConsideracionesComponent } from './c-consideraciones.component';

describe('CConsideracionesComponent', () => {
  let component: CConsideracionesComponent;
  let fixture: ComponentFixture<CConsideracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConsideracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConsideracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
