import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFomularioDifuntoComponent } from './a-fomulario-difunto.component';

describe('AFomularioDifuntoComponent', () => {
  let component: AFomularioDifuntoComponent;
  let fixture: ComponentFixture<AFomularioDifuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFomularioDifuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFomularioDifuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
