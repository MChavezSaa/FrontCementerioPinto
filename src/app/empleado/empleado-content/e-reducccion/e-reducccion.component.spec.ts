import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EReducccionComponent } from './e-reducccion.component';

describe('EReducccionComponent', () => {
  let component: EReducccionComponent;
  let fixture: ComponentFixture<EReducccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EReducccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EReducccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
