import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMarkerEnfasisComponent } from './amarker-enfasis.component';

describe('AMarkerEnfasisComponent', () => {
  let component: AMarkerEnfasisComponent;
  let fixture: ComponentFixture<AMarkerEnfasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMarkerEnfasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMarkerEnfasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
