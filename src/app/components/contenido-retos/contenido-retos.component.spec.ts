import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoRetosComponent } from './contenido-retos.component';

describe('ContenidoRetosComponent', () => {
  let component: ContenidoRetosComponent;
  let fixture: ComponentFixture<ContenidoRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoRetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
