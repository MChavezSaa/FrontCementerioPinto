import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATerrenoComponent } from './a-terreno.component';

describe('ATerrenoComponent', () => {
  let component: ATerrenoComponent;
  let fixture: ComponentFixture<ATerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
