import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBasL2Component } from './inicio-bas-l2.component';

describe('InicioBasL2Component', () => {
  let component: InicioBasL2Component;
  let fixture: ComponentFixture<InicioBasL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioBasL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioBasL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
