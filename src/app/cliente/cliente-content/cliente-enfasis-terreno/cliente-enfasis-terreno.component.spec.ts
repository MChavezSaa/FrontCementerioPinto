import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEnfasisTerrenoComponent } from './cliente-enfasis-terreno.component';

describe('ClienteEnfasisTerrenoComponent', () => {
  let component: ClienteEnfasisTerrenoComponent;
  let fixture: ComponentFixture<ClienteEnfasisTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEnfasisTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEnfasisTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
