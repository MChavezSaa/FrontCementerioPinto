import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVentaComponent } from './a-venta.component';

describe('AVentaComponent', () => {
  let component: AVentaComponent;
  let fixture: ComponentFixture<AVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
