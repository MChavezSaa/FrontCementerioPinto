import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETerrenosComponent } from './e-terrenos.component';

describe('ETerrenosComponent', () => {
  let component: ETerrenosComponent;
  let fixture: ComponentFixture<ETerrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETerrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
