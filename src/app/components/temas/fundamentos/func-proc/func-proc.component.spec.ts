import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProcComponent } from './func-proc.component';

describe('FuncProcComponent', () => {
  let component: FuncProcComponent;
  let fixture: ComponentFixture<FuncProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncProcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
