import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASepulturaComponent } from './asepultura.component';

describe('ASepulturaComponent', () => {
  let component: ASepulturaComponent;
  let fixture: ComponentFixture<ASepulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASepulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASepulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
