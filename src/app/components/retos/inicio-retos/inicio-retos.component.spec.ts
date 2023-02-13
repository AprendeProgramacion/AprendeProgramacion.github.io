import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRetosComponent } from './inicio-retos.component';

describe('InicioRetosComponent', () => {
  let component: InicioRetosComponent;
  let fixture: ComponentFixture<InicioRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioRetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
