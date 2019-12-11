import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATrasladoComponent } from './a-traslado.component';

describe('ATrasladoComponent', () => {
  let component: ATrasladoComponent;
  let fixture: ComponentFixture<ATrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
