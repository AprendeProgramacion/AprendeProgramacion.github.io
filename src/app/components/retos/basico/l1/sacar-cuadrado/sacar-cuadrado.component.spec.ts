import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarCuadradoComponent } from './sacar-cuadrado.component';

describe('SacarCuadradoComponent', () => {
  let component: SacarCuadradoComponent;
  let fixture: ComponentFixture<SacarCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarCuadradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
