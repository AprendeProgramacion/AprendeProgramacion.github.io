import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglosComponent } from './arreglos.component';

describe('ArreglosComponent', () => {
  let component: ArreglosComponent;
  let fixture: ComponentFixture<ArreglosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArreglosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
