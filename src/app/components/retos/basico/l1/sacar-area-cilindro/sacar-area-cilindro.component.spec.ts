import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarAreaCilindroComponent } from './sacar-area-cilindro.component';

describe('SacarAreaCilindroComponent', () => {
  let component: SacarAreaCilindroComponent;
  let fixture: ComponentFixture<SacarAreaCilindroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarAreaCilindroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarAreaCilindroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
