import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpAritComponent } from './op-arit.component';

describe('OpAritComponent', () => {
  let component: OpAritComponent;
  let fixture: ComponentFixture<OpAritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpAritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpAritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
