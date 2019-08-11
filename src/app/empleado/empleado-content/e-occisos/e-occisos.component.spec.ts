import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EOccisosComponent } from './e-occisos.component';

describe('EOccisosComponent', () => {
  let component: EOccisosComponent;
  let fixture: ComponentFixture<EOccisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EOccisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EOccisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
