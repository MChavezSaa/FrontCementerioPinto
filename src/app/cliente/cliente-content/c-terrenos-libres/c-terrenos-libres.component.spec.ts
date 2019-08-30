import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTerrenosLibresComponent } from './c-terrenos-libres.component';

describe('CTerrenosLibresComponent', () => {
  let component: CTerrenosLibresComponent;
  let fixture: ComponentFixture<CTerrenosLibresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTerrenosLibresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTerrenosLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
