import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCuotasComponent } from './c-cuotas.component';

describe('CCuotasComponent', () => {
  let component: CCuotasComponent;
  let fixture: ComponentFixture<CCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
