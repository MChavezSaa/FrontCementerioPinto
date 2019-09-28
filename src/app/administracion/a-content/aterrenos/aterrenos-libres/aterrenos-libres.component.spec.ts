import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATerrenosLibresComponent } from './aterrenos-libres.component';

describe('ATerrenosLibresComponent', () => {
  let component: ATerrenosLibresComponent;
  let fixture: ComponentFixture<ATerrenosLibresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATerrenosLibresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATerrenosLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
