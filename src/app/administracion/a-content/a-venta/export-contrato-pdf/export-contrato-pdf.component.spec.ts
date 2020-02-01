import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContratoPDFComponent } from './export-contrato-pdf.component';

describe('ExportContratoPDFComponent', () => {
  let component: ExportContratoPDFComponent;
  let fixture: ComponentFixture<ExportContratoPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportContratoPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContratoPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
