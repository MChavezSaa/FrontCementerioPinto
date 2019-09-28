import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CReglamentoComponent } from './c-reglamento.component';

describe('CReglamentoComponent', () => {
  let component: CReglamentoComponent;
  let fixture: ComponentFixture<CReglamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CReglamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CReglamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
