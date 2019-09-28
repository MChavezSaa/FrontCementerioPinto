import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATerrenosReservadosComponent } from './aterrenos-reservados.component';

describe('ATerrenosReservadosComponent', () => {
  let component: ATerrenosReservadosComponent;
  let fixture: ComponentFixture<ATerrenosReservadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATerrenosReservadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATerrenosReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
