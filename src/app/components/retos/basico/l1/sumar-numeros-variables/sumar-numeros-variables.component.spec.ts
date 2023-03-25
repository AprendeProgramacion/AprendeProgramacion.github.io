import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarNumerosVariablesComponent } from './sumar-numeros-variables.component';

describe('SumarNumerosVariablesComponent', () => {
  let component: SumarNumerosVariablesComponent;
  let fixture: ComponentFixture<SumarNumerosVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumarNumerosVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumarNumerosVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
