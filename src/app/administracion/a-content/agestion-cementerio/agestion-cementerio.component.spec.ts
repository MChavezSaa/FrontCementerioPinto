import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGestionCementerioComponent } from './agestion-cementerio.component';

describe('AGestionCementerioComponent', () => {
  let component: AGestionCementerioComponent;
  let fixture: ComponentFixture<AGestionCementerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGestionCementerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGestionCementerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
