import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto1BComponent } from './reto1-b.component';

describe('Reto1BComponent', () => {
  let component: Reto1BComponent;
  let fixture: ComponentFixture<Reto1BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto1BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
