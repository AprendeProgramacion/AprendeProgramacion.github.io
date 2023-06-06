import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposLenguajesComponent } from './tipos-lenguajes.component';

describe('TiposLenguajesComponent', () => {
  let component: TiposLenguajesComponent;
  let fixture: ComponentFixture<TiposLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposLenguajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
