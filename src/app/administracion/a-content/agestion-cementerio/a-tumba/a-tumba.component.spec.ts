import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATumbaComponent } from './a-tumba.component';

describe('ATumbaComponent', () => {
  let component: ATumbaComponent;
  let fixture: ComponentFixture<ATumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
