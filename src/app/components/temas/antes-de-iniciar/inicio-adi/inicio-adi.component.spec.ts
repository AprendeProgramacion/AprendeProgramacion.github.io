import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioADIComponent } from './inicio-adi.component';

describe('InicioADIComponent', () => {
  let component: InicioADIComponent;
  let fixture: ComponentFixture<InicioADIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioADIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioADIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
