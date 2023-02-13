import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefProgramacionComponent } from './def-programacion.component';

describe('DefProgramacionComponent', () => {
  let component: DefProgramacionComponent;
  let fixture: ComponentFixture<DefProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefProgramacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
