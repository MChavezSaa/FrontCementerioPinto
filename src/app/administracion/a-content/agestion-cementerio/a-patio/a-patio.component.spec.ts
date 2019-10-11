import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APatioComponent } from './a-patio.component';

describe('APatioComponent', () => {
  let component: APatioComponent;
  let fixture: ComponentFixture<APatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
