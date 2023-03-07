import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarAreaCuadradoComponent } from './sacar-area-cuadrado.component';

describe('SacarAreaCuadradoComponent', () => {
  let component: SacarAreaCuadradoComponent;
  let fixture: ComponentFixture<SacarAreaCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarAreaCuadradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarAreaCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
