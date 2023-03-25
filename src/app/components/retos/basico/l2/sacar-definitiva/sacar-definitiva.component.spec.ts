import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarDefinitivaComponent } from './sacar-definitiva.component';

describe('SacarDefinitivaComponent', () => {
  let component: SacarDefinitivaComponent;
  let fixture: ComponentFixture<SacarDefinitivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarDefinitivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacarDefinitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
