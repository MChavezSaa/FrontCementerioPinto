import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPaseComponent } from './export-pase.component';

describe('ExportPaseComponent', () => {
  let component: ExportPaseComponent;
  let fixture: ComponentFixture<ExportPaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
