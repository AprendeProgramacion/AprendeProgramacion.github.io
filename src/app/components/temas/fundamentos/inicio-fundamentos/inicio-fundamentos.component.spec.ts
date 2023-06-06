import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFundamentosComponent } from './inicio-fundamentos.component';

describe('InicioFundamentosComponent', () => {
  let component: InicioFundamentosComponent;
  let fixture: ComponentFixture<InicioFundamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFundamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioFundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
