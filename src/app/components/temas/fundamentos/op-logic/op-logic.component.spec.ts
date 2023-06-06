import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpLogicComponent } from './op-logic.component';

describe('OpLogicComponent', () => {
  let component: OpLogicComponent;
  let fixture: ComponentFixture<OpLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpLogicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
