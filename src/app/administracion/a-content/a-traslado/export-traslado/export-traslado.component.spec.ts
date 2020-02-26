import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTrasladoComponent } from './export-traslado.component';

describe('ExportTrasladoComponent', () => {
  let component: ExportTrasladoComponent;
  let fixture: ComponentFixture<ExportTrasladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportTrasladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
