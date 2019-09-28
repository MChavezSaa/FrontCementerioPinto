import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADifuntoComponent } from './a-difunto.component';

describe('ADifuntoComponent', () => {
  let component: ADifuntoComponent;
  let fixture: ComponentFixture<ADifuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADifuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADifuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
