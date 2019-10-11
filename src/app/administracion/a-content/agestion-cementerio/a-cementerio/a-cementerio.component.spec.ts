import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACementerioComponent } from './a-cementerio.component';

describe('ACementerioComponent', () => {
  let component: ACementerioComponent;
  let fixture: ComponentFixture<ACementerioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACementerioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACementerioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
