import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarHipotenusaComponent } from './sacar-hipotenusa.component';

describe('SacarHipotenusaComponent', () => {
  let component: SacarHipotenusaComponent;
  let fixture: ComponentFixture<SacarHipotenusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarHipotenusaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarHipotenusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
