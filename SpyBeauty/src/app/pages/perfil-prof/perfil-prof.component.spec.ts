import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfComponent } from './perfil-prof.component';

describe('PerfilProfComponent', () => {
  let component: PerfilProfComponent;
  let fixture: ComponentFixture<PerfilProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
