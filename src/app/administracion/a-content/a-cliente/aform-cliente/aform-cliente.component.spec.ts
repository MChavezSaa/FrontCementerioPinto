import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AformClienteComponent } from './aform-cliente.component';

describe('AformClienteComponent', () => {
  let component: AformClienteComponent;
  let fixture: ComponentFixture<AformClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AformClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AformClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
