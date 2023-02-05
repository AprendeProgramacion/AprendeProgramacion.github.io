import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTemasComponent } from './inicio-temas.component';

describe('InicioTemasComponent', () => {
  let component: InicioTemasComponent;
  let fixture: ComponentFixture<InicioTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
