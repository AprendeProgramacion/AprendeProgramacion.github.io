import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTemasComponent } from './contenido-temas.component';

describe('ContenidoTemasComponent', () => {
  let component: ContenidoTemasComponent;
  let fixture: ComponentFixture<ContenidoTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
