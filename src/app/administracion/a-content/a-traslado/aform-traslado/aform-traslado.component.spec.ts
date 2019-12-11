import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AformTrasladoComponent } from './aform-traslado.component';

describe('AformTrasladoComponent', () => {
  let component: AformTrasladoComponent;
  let fixture: ComponentFixture<AformTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AformTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AformTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
