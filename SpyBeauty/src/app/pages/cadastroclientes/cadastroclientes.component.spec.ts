import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroclientesComponent } from './cadastroclientes.component';

describe('CadastroclientesComponent', () => {
  let component: CadastroclientesComponent;
  let fixture: ComponentFixture<CadastroclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
