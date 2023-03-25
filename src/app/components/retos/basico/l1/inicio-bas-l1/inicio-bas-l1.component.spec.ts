import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBasL1Component } from './inicio-bas-l1.component';

describe('InicioBasL1Component', () => {
  let component: InicioBasL1Component;
  let fixture: ComponentFixture<InicioBasL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioBasL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioBasL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
