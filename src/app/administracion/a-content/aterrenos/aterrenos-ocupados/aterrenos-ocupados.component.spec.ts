import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATerrenosOcupadosComponent } from './aterrenos-ocupados.component';

describe('ATerrenosOcupadosComponent', () => {
  let component: ATerrenosOcupadosComponent;
  let fixture: ComponentFixture<ATerrenosOcupadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATerrenosOcupadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATerrenosOcupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
