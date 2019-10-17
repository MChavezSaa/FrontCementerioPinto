import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AClienteComponent } from './a-cliente.component';

describe('AClienteComponent', () => {
  let component: AClienteComponent;
  let fixture: ComponentFixture<AClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
