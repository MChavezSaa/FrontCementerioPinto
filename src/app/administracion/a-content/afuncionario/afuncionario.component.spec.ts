import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFuncionarioComponent } from './afuncionario.component';

describe('AFuncionarioComponent', () => {
  let component: AFuncionarioComponent;
  let fixture: ComponentFixture<AFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
