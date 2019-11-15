import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACreartumbaComponent } from './a-creartumba.component';

describe('ACreartumbaComponent', () => {
  let component: ACreartumbaComponent;
  let fixture: ComponentFixture<ACreartumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACreartumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACreartumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
