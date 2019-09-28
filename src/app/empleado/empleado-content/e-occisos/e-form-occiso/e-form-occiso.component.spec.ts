import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormOccisoComponent } from './e-form-occiso.component';

describe('EFormOccisoComponent', () => {
  let component: EFormOccisoComponent;
  let fixture: ComponentFixture<EFormOccisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormOccisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormOccisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
