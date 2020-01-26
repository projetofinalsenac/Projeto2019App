import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCadastroComponent } from './tipo-cadastro.component';

describe('TipoCadastroComponent', () => {
  let component: TipoCadastroComponent;
  let fixture: ComponentFixture<TipoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
