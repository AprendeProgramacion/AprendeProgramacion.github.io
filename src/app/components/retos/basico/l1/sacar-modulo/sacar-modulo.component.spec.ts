import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarModuloComponent } from './sacar-modulo.component';

describe('SacarModuloComponent', () => {
  let component: SacarModuloComponent;
  let fixture: ComponentFixture<SacarModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarModuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
