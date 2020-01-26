import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusencontrosComponent } from './meusencontros.component';

describe('MeusencontrosComponent', () => {
  let component: MeusencontrosComponent;
  let fixture: ComponentFixture<MeusencontrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusencontrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusencontrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
