import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarDiaComponent } from './evaluar-dia.component';

describe('EvaluarDiaComponent', () => {
  let component: EvaluarDiaComponent;
  let fixture: ComponentFixture<EvaluarDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluarDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
